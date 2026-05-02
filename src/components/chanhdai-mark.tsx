export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      {/* Y */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H64V128H192V0H256V128H192V256H64V128H0V0Z"
        fill="currentColor"
      />
      {/* S */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M320 0H512V64H384V128H512V256H320V192H448V128H320V0ZM384 64H448V128H384V64Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H64V128H192V0H256V128H192V256H64V128H0V0Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M320 0H512V64H384V128H512V256H320V192H448V128H320V0ZM384 64H448V128H384V64Z" fill="${color}"/></svg>`
}

