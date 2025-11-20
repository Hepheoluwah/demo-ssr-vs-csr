import UserListServer from "./components/UserListServer";
import UserListClientWrapper from "./components/UserListClientWrapper";
import RefreshButton from "./components/RefreshButton";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center text-black">
        Server vs Client User List Demo
      </h1>

  

      {/* SSR vs CSR Cards */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Understanding SSR vs CSR</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* SSR Card */}
          <div className="flex flex-col p-4 bg-green-50 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="bg-green-100 text-green-700 rounded p-2 mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3h12v14H4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-green-800">Server-Side Rendering (SSR)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              HTML is generated on the server before sending to the browser. Content appears instantly and works without JavaScript.
            </p>
            <h4 className="font-semibold text-green-700 mb-1">Benefits</h4>
            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
              <li>Faster initial page load</li>
              <li>Better SEO (search engines see content)</li>
              <li>Works without JavaScript enabled</li>
            </ul>
          </div>

          {/* CSR Card */}
          <div className="flex flex-col p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="bg-blue-100 text-blue-700 rounded p-2 mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5h16v10H2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-800">Client-Side Rendering (CSR)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              HTML is minimal, and JavaScript fetches data in the browser after page load. Requires JavaScript to display content.
            </p>
            <h4 className="font-semibold text-blue-700 mb-1">Benefits</h4>
            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
              <li>Reduced server load</li>
              <li>More interactive user experience</li>
              <li>Easier to build dynamic UIs</li>
            </ul>
          </div>
        </div>

        {/* Watch the Timing */}
        <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="mr-2 text-gray-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 1a9 9 0 100 18 9 9 0 000-18zM9 5h2v6H9V5zm0 8h2v2H9v-2z" />
            </svg>
          </div>
          <p className="text-gray-700 text-sm">
            <strong>Watch the Timing:</strong> Notice how the green SSR list appears instantly
            with the page, while the blue CSR list shows a loading state first. The CSR
            list displays a slight delay showing how long it took to fetch data
            from the API in your browser.
          </p>
        </div>
      </div>

        {/* Refresh Button */}
      <div className="flex justify-center mb-6">
        <RefreshButton />
      </div>

      {/* Side-by-Side User Lists */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Server List */}
        <section className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-sm min-h-0">
          <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
            Server List (Fast)
          </h2>
          <UserListServer />
        </section>

        {/* Client List */}
        <section className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-sm min-h-0 md:pl-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">
            Client List (Loaded in Browser)
          </h2>
          <UserListClientWrapper />
        </section>
      </div>
    </main>
  );
}
