/** @jsx jsx */
/** @typedef { import('../../mocks/generated/prisma-client/index').Buddy } Buddy */
import { jsx, Heading, Text } from 'theme-ui'
import { useState, useRef, useCallback, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import unique from 'unique-string'
import { useQuery, useLazyQuery, gql } from '@apollo/client'
import { keyframes } from '@emotion/core'
import Transition from '../components/Transition'
import Grid from '../components/Grid'
import BuddyGrid from '../components/BuddyGrid'
import SearchIcon from '../assets/search.svg'
import XIcon from '../assets/x.svg'

const searchTransitionDuration = 200
const searchTextareaId = `search-textarea-${unique()}`
const searchTextareaClass = searchTextareaId
const searchPlaceholderClass = `search-placeholder-${unique()}`
const searchLabelClass = `search-label-${unique()}`

const searchStyles = {
  [`.${searchPlaceholderClass}`]: {
    transition: `opacity ${searchTransitionDuration}ms`,
  },

  [`.${searchTextareaClass}`]: {
    '&:focus': {
      [`& ~ .${searchPlaceholderClass}`]: {
        opacity: 0.5,
      },
      [`& ~ .${searchLabelClass}`]: {
        pointerEvents: 'none',
      },
    },
    '&:not(:placeholder-shown)': {
      [`& ~ .${searchPlaceholderClass}`]: {
        opacity: 0,
      },
    }
  },
}

export const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const Index = () => {
  const { data: freshBuddiesData } = useQuery(gql`
    {
      buddies(last: 10) {
        id
        name
        image
      }
    }
  `)
  /** @type {Buddy[]|null} */
  const freshBuddies = freshBuddiesData?.buddies ?? null

  const [searchTerm, setSearchTerm] = useState('')
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('')
  const submitSearchTerm = useDebouncedCallback((term) => {
    setSubmittedSearchTerm(term)
    fetchSearchBuddies({
      variables: {
        term,
      },
    })
  }, 300)
  const searchTextareaRef = useRef(null)

  const [fetchSearchBuddies, { data: searchBuddiesData }] = useLazyQuery(gql`
    query Search($term: String!) {
      buddies(where: { name_contains: $term }, first: 5) {
        id
        name
        image
      }
    }
  `)
  /** @type {Buddy[]|null} */
  const searchBuddies = submittedSearchTerm ? (searchBuddiesData?.buddies ?? null) : null

  const refreshSearchTextareaHeight = useCallback(() => {
    searchTextareaRef.current.style.height = ''
    searchTextareaRef.current.style.height = `${searchTextareaRef.current.scrollHeight}px`
  }, [searchTextareaRef])

  const updateSearchTerm = useCallback((term) => {
    term = term.replace(/(\r\n|\n|\r)/gm, '')
    setSearchTerm(term)
    const searchTermToSubmit = term.trim()
    submitSearchTerm(searchTermToSubmit)
    if (!searchTermToSubmit) {
      submitSearchTerm.flush()
    }
    refreshSearchTextareaHeight()
  }, [setSearchTerm, submitSearchTerm, refreshSearchTextareaHeight])

  useEffect(() => {
    refreshSearchTextareaHeight()
    window.addEventListener('resize', refreshSearchTextareaHeight)
    return () => window.removeEventListener('resize', refreshSearchTextareaHeight)
  }, [refreshSearchTextareaHeight])

  return (
    <Transition>
      <Grid>
        <section sx={{ display: 'contents' }}>
          <div>
            <SearchIcon sx={{ display: 'block', width: ['24px', '32px', null, '36px', '40px'], color: 'grayLight' }} />
          </div>
          <div sx={{ ...searchStyles, position: 'relative', gridColumn: '2 / -2', mx: ['-40px', '0'], mt: ['-0.32em', null, null, '-0.4em'], variant: 'text.heading', fontSize: [6, 7, null, 8, 9] }}>
            <textarea
              ref={searchTextareaRef}
              id={searchTextareaId}
              className={searchTextareaClass}
              sx={{ position: 'relative', zIndex: 1, display: 'block', width: '100%', height: ['54px', '80px', null, '106px', '158px'], p: 0, border: 'none', outline: 'none', bg: 'transparent', resize: 'none', overflow: 'hidden', font: 'inherit', letterSpacing: 'inherit' }}
              value={searchTerm}
              placeholder=" "
              maxLength={40}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                }
              }}
              onChange={(event) => {
                updateSearchTerm(event.target.value)
              }}
            />
            <Heading
              as="h1"
              className={searchPlaceholderClass}
              sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', font: 'inherit', letterSpacing: 'inherit' }}
            >
              Crypto<br />
              buddies
            </Heading>
            <label
              htmlFor={searchTextareaId}
              className={searchLabelClass}
              sx={{ position: 'absolute', left: '-9999px', right: '-9999px', top: '0', bottom: '-0.9em', opacity: 0, cursor: 'text' }}
            >
              Search cryptobuddies
            </label>
          </div>
          {searchTerm && (
            <div sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', animationName: fadeIn, animationDuration: `${searchTransitionDuration}ms`, animationFillMode: 'both' }}>
              <button type="button" sx={{ zIndex: 1, p: 0, border: 'none', bg: 'transparent', '&:hover': { color: 'primary' }, cursor: 'pointer' }} onClick={() => updateSearchTerm('')}>
                <XIcon title="Clear search terms" sx={{ display: 'block', width: ['24px', '32px', null, '36px', '40px'] }} />
              </button>
            </div>
          )}
          {searchBuddies && (
            <div sx={{ position: 'relative', mb: [-9, null, null, -10, -12], gridColumn: ['1 / -1', null, null, '2 / -2'], pt: 6 }}>
              {searchBuddies.length > 0 ? (
                <BuddyGrid buddies={searchBuddies} />
              ) : (
                <Text sx={{ color: 'gray', fontSize: [3, 4, null, null, 5], textAlign: ['center', 'left'] }}>
                  No buddy matching the name “{submittedSearchTerm}”
                </Text>
              )}
            </div>
          )}
        </section>

        <section sx={{ mt: [11, null, null, 12, 14], gridColumn: ['1 / -1', null, null, '2 / -2'], opacity: searchBuddies ? 0.3 : 1, '&:hover, &:focus-within': { opacity: 1 }, transition: 'opacity 500ms' }}>
          <Heading as="h2" sx={{ mb: 7, fontSize: [4, 5, null, null, 6], textAlign: ['center', 'left'] }}>
            Fresh cryptobuddies
          </Heading>
          {freshBuddies && <BuddyGrid buddies={freshBuddies} />}
        </section>
      </Grid>
    </Transition>
  )
}

export default Index
