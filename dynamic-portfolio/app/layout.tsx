const mainHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className="h-full bg-slate-100">
          <main className="pt-14 pb-5 bg-slate-100">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default mainHome;
