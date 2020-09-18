/* globals fetch */

const serverBaseUrl = `${process.env.REACT_APP_SERVER_DOMAIN}`

const sendRequest = async (url, method = 'GET', body) => {
  const res = await fetch(`${serverBaseUrl}${url}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  })
  return res.json()
}

export const login = async (username, password) => {
  const res = await sendRequest('/admin/login', 'POST', { username, password })
  return res && res.isLoggedIn
}

export const fetchCurrentUser = async () => {
  const res = await sendRequest('/admin/api/status')
  return (res && res.isLoggedIn) ? res.user : undefined
}

export const fetchUsers = async () => {
  const res = await sendRequest('/admin/api/users')
  return (res && res.users) ? res.users : undefined
}

export const createUser = async (username, privilege) => {
  const res = await sendRequest(
    '/admin/api/users',
    'POST',
    { username, privilege }
  )
  return res && !res.error ? res.user : undefined
}

export const updatePassword = async (currentPassword, newPassword) => {
  const res = await sendRequest(
    '/admin/api/account',
    'PUT',
    { currentPassword, newPassword }
  )
  return res && !res.error
}

export const deleteUser = async (userId) => {
  const res = await sendRequest(`/admin/api/users/${userId}`, 'DELETE')
  return res && !res.error
}

export const postCheckpoints = async (checkpoints) => {
  const res = await sendRequest(
    '/admin/api/checkpoints',
    'POST',
    { checkpoints }
  )
  return res && !res.error
}
