
export default async function Home() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000))

  return (
    <>Hello world</>
  )
}
