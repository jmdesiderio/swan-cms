function log (err) {
  console.error(err)
}

function error (err) {
  throw new Error(err)
}

function logAndError (err) {
  log(err)

  // TODO: create user friendly error look up
  error(err)
}

module.exports = {
  log,
  error,
  logAndError
}
