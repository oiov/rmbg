export const Footer = () => {
  return (
    <span className="mx-20 p-4 text-center text-xs text-neutral-600 md:mx-0 md:p-2 md:text-start">
      Built by{" "}
      <a
        className="hover:underline"
        target="_blank"
        href="https://blog.oiov.dev"
      >
        @oiov
      </a>
      {" - "}
      <a
        className="hover:underline"
        target="_blank"
        href="https://creativecommons.org/licenses/by/4.0/"
      >
        CC BY 4.0 Licence
      </a>
    </span>
  )
}
