export default function RootLayout({
  children,
  users,
  revenue,
  notification,
  login
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}>) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div> {children}</div>
      <div className="flex overflow-hidden flex-wrap">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notification}</div>
      </div>
    </div>
  )
    :
    (
      login
    )
    

}
