import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TableOfContents = ({ toc }) => {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );

  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (items.length <= 1) {
    return null;
  }

  return (
    <div className="toc"> {/* Flex layout */}
      <ul> {/* Adjusted width and spacing */}
        {items.map((item) => {
          const href = `#${item.id}`;
          const active = activeHash === href;

          return (
            <li
              key={item.title}
              className={[
                active ? 'active' : undefined,
                item.level === 3 ? 'padded' : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <Link href={href}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
