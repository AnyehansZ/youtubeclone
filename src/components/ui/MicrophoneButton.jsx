import { Mic } from 'lucide-react';
import '@styles/wrapper.css';

export default function MicrophoneButton() {
  return (
    <button className="microph_btn" title="Voice search">
      <Mic size={20} color="#0f0f0f" />
    </button>
  );
}
