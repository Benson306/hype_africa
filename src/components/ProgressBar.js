import React from 'react'

function ProgressBar({ percent }) {
  return (
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${Number(percent)}%` }}> {percent}%</div>
  </div>
  )
}

export default ProgressBar
