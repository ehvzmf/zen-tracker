export const Sidebar: React.FC = () => {
  return (
    <aside style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '1rem' }}>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </aside>
  );
};