export default function Dashboard() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">ダッシュボード</h1>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">商品名（必須）</label>
            <input type="text" id="productName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="productImageUrl" className="block text-sm font-medium text-gray-700">商品画像URL（任意）</label>
            <input type="url" id="productImageUrl" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="priceJpy" className="block text-sm font-medium text-gray-700">価格（任意・半角数値）</label>
            <input type="number" id="priceJpy" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="buyUrl" className="block text-sm font-medium text-gray-700">買える場所URL（任意）</label>
            <input type="url" id="buyUrl" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div>
            <button type="submit" className="w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              短文案を生成
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
