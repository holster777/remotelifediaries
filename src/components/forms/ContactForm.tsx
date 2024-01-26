const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''
const redirectValue = process.env.NEXT_PUBLIC_WEB3FORMS_REDIRECT ?? ''

export default function ContactForm() {
  return (
    <div className="mx-auto flex items-center justify-center">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-full space-y-4"
      >
        <input type="hidden" name="access_key" value={accessKey} />
        <input type="hidden" name="redirect" value={redirectValue} />
        <input type="checkbox" name="botcheck" className="hidden" />

        <div>
          <label htmlFor="name" className="mb-2 block">
            Your name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-md border-none bg-white text-black dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block">
            Your email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md border-none bg-white text-black dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block">
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            name="message"
            required
            className="w-full rounded-md border-none bg-white text-black dark:text-white"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="my-2 ml-[-3px] inline-block rounded-full bg-[#3F3C47] px-7 py-2 text-sm font-bold text-white transition duration-300 hover:bg-opacity-80 dark:bg-[#EBFFA3] dark:text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
