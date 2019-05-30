import React from 'react'

export function useSocialMediaFilter(
  defaultMinFollowers = 0,
  defaultMaxFollowers = 10000
) {
  const [minFollowers, setMinFollowers] = React.useState(defaultMinFollowers)
  const [maxFollowers, setMaxFollowers] = React.useState(defaultMaxFollowers)

  return [
    {
      value: minFollowers,
      set: setMinFollowers,
    },
    {
      value: maxFollowers,
      set: setMaxFollowers,
    }
  ]
}