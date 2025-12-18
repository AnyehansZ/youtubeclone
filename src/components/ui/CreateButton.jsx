import { Plus } from 'lucide-react';
import '@styles/wrapper.css';

export default function CreateButton() {
  return (
    <button className="create_btn" title="Create">
      <Plus size={20} color="white" />
      <h2>
      Create
      </h2>
    </button>
  );
}
