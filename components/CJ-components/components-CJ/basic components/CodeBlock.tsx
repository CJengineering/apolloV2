import React from 'react';

const CodeBlock = ({ code }: { code: string }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto shadow-lg">
        <code className="font-mono text-sm">
          {code}
        </code>
      </pre>
    </div>

  );
};

export default CodeBlock;
