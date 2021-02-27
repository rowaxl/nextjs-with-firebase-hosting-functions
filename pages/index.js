export default function Home(props) {
  return (
    <div>
      <div>
        {
          props.isSSR ? (
            <h2>
              SSR Working
            </h2>
          ) : (
            <h2>
              SSR Not Works
            </h2>
          )
        }
      </div>

      <div>
        {
          props.isStatic ? (
            <h2>
              Static generated
            </h2>
          ) : (
            <h2>
              is Not Static
            </h2>
          )
        }
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  return { props: { isSSR: true } }
}

// export async function getStaticProps() {
//   return { props: { isStatic: true } }
// }