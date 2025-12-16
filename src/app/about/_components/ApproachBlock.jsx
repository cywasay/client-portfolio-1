import { approachParagraphs } from '../data';

export default function ApproachBlock() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">My Teaching Approach</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
          {approachParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎨</div>
            <p className="text-gray-600 font-medium">Creative & Adaptive</p>
            <p className="text-gray-500 text-sm mt-2">Teaching Methods</p>
          </div>
        </div>
      </div>
    </div>
  );
}

