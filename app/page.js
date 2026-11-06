export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-mono">
      <div className="max-w-md w-full border border-slate-800 bg-slate-900/50 p-6 rounded-lg shadow-xl space-y-4">
        <h1 className="text-xl font-bold text-emerald-400 border-b border-slate-800 pb-2">
          RAM Service API
        </h1>
        <p className="text-sm text-slate-400">Available Endpoints:</p>
        <ul className="space-y-2 text-sm">
          <li className="bg-slate-950 p-2 rounded border border-slate-800/80">
            <span className="text-amber-400 font-semibold">GET</span> <code className="text-slate-200">/api/get-ram</code>
          </li>
          <li className="bg-slate-950 p-2 rounded border border-slate-800/80">
            <span className="text-amber-400 font-semibold">GET</span> <code className="text-slate-200">/api/version</code>
          </li>
          <li className="bg-slate-950 p-2 rounded border border-slate-800/80">
            <span className="text-amber-400 font-semibold">GET</span> <code className="text-slate-200">/api/test/sleep?ms=1000</code>
          </li>
        </ul>
      </div>
    </main>
  );
}
