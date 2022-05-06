
# My Customize Template

create for fast develop medium+ scale react project


## About main tool
- `antd` main ui component
- `emotion` flexible styling override , great with @media screen
- `axios` fetch backend data
- `react query` hook that handle, cache, action , refetch , etc
- `gulp` develop work flow in this case focus on build css
- `react-router` route pages
- `typescript` type check


# Structure

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┗ 📂svg
 ┣ 📂components
 ┃ ┣ 📂ComeComponent
 ┃ ┗ 📜index.ts <-- import every components to this index.ts
 ┣ 📂helper
 ┃ ┗ 📜getRandomColor.ts
 ┃ ┗ 📜index.ts <-- import every helper to this index.ts
 ┣ 📂hook
 ┃ ┣ 📂useToggle
 ┃ ┣ 📂userQuery <-- react-query action for query or mutate relate with service/api
 ┃   ┗ 📜index.ts <-- can create many of user hook (cause it is actions of user)
 ┃ ┗ 📜index.ts <-- import every hook to this index.ts
 ┣ 📂layouts
 ┃ ┣ 📂MainLayout
 ┃ ┣ 📂SettingLayout
 ┃ ┗ 📜index.ts <-- import every layout to this index.ts
 ┣ 📂pages
 ┃ ┗ 📂Home
 ┃   ┣ 📂component <-- for store static component
 ┃ ┣ 📂settings <-- outlet use lowercase name
 ┃ ┃ ┣ 📂SettingLanguage
 ┃ ┃ ┗ 📂SettingProfile
 ┃ ┗ 📜index.ts <-- import *every inside pages to this index.ts
 ┣ 📂routes
 ┃ ┣ 📜ProtectedRoute.tsx <-- protect route logic
 ┃ ┣ 📜Route.tsx <--
 ┃ ┗ 📜index.ts
 ┣ 📂service
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂user <-- rest api work with react-query hook ex hook/userQuery/index.ts
 ┃ ┣ 📂axios
 ┃ ┃ ┣ 📜index.ts <-- interceptor config
 ┃ ┃ ┗ 📜appAxios.ts <-- appAxios main instance to fecth
 ┃ ┗ 📜index.ts
 ┣ 📂theme <-- theme emotion , css
 ┣ 📂types
 ┃ ┣ 📜custom.d.ts
 ┃ ┣ 📜typings.d.ts <-- any global type
 ┣ 📜App.tsx
 ┣ 📜index.tsx
   ```

   when we create new file we need to export that in to single index.ts
   when we use it will look like this
   ```
   import { ComponentA , ComponentB } from "./components
   import { getRandomColor } from "./helper"
   imort { useUser , useAuth } from "./hook"
   ```
   sure we need to spend more time to export in to single index.ts
   but in my opinion it good for mainternance
   that why i prefer to medium project that can scale up