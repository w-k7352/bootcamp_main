import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">AI SNS & Blog Generator</h1>
      </div>

      <div className="mt-12">
        <p className="text-center text-lg">
          商品情報を入力するだけで、AIが魅力的なSNS投稿とブログ記事を自動生成します。
        </p>
      </div>

      <div className="mt-12">
        <Link href="/dashboard" className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500">
          今すぐ始める
        </Link>
      </div>
    </main>
  );
}