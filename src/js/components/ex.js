// При загрузке страницы или при смене темы лучше всего добавить строку в `head`, чтобы избежать FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Всякий раз, когда пользователь явно выбирает светлый режим
localStorage.theme = 'light'

// Всякий раз, когда пользователь явно выбирает темный режим
localStorage.theme = 'dark'
