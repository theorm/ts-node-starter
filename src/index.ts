export async function main() {
  return 'Hi there'
}

if (require.main === module) {
  main()
    .then(value => {
      console.info(`Finished: ${value}`)
      process.exit(0)
    })
    .catch(error => {
      console.error(`Error occurred: ${error}`)
      process.exit(1)
    })
}
