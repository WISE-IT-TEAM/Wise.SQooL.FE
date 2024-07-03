// pages/docs/index.js

import DocsLayout from '../../components/DocsLayout';

const Docs = () => {
  return (
    <DocsLayout>
      <section id="introduction" className="mb-8">
        <h1 className="text-2xl font-bold">Introduction</h1>
        <p>Welcome to the documentation! This section introduces the project.</p>
      </section>
      
      <section id="setup" className="mb-8">
        <h2 className="text-xl font-bold">Setup</h2>
        <p>Here's how to set up the project...</p>
      </section>
      
      <section id="usage" className="mb-8">
        <h2 className="text-xl font-bold">Usage</h2>
        <p>Here's how to use the project...</p>
      </section>
      
      {/* 더 많은 섹션을 추가하세요 */}
    </DocsLayout>
  );
};

export default Docs;
