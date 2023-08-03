import Provider from "@components/Provider"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
 
      <Provider>
     
      {children}
      </Provider>
      
      
      </body>
    </html>
  )
}
