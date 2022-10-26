import ReactMarkdown from 'react-markdown'
import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import {
  atomDark
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

// reference https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
export default function Markdown({ ...props }) {
  SyntaxHighlighter.registerLanguage('tsx', tsx);
  return (
    <>
      <ReactMarkdown
        {...props}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark as any}
                language={match[1]}
                className="font-mono"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          h1({ ...props }) {
            return (
              <h1 className='text-white text-center font-serif font-black'>
                {props.children}
              </h1>
            )
          },
          h2({ ...props }) {
            return (
              <h2 className='text-white text-center font-serif font-bold'>
                {props.children}
              </h2>
            )
          },
          h3({ ...props }) {
            return (
              <h3 className='text-white text-center font-serif font-bold'>
                {props.children}
              </h3>
            )
          },
          strong({ ...props }) {
            return (
              <strong className='text-white'>
                {props.children}
              </strong>
            )
          },
          // code({ ...props }) {
          //   return (
          //     <code className='text-white'>
          //       {props.children}
          //     </code>
          //   )
          // },
          p({ ...props }) {
            return (
              <div className='font-sans'>
                {props.children}
              </div>
            )
          },
          img({ src, alt, className, ...props }) {
            return (
              <>
                <figure>
                  <Image
                    src={src as string}
                    alt={alt as string}
                    className={clsx(className, "rounded-xl")}
                  />
                  <figcaption>{alt}</figcaption>
                </figure>
              </>
            )
          },
          a({ ...props }) {
            return (
              <Link href={props.href as string}>
                {props.children}
              </Link>
            )
          }

        }}
      >{props.children}</ReactMarkdown>
    </>
  )
}