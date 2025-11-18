import TopNavBar from '@components/common/TopNavBar';
import BoxWrap from '@components/common/BoxWrap';
import '@styles/page_container.css';

// Home page - main entry point for the home feature
export default function Home() {
  return (
    <div className="page_container">
      <TopNavBar />
      <BoxWrap />
    </div>
  );
}
