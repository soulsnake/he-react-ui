import moment from 'moment'
const intervals = [
  { label: 'year', seconds: 31536000 },
  { label: 'month', seconds: 2592000 },
  { label: 'day', seconds: 86400 },
  { label: 'hour', seconds: 3600 },
  { label: 'minute', seconds: 60 },
  { label: 'second', seconds: 0 }
]

export default function timeSince (dateStr) {
  const seconds = Math.floor((moment.utc().format('x') - moment.utc(dateStr).format('x')) / 1000)
  const interval = intervals.find(i => i.seconds < seconds)
  if (!interval || interval.seconds === 0) { return 'Just now' } else {
    const count = Math.floor(seconds / interval.seconds)
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`
  }
}
