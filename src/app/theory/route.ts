import { permanentRedirect } from 'next/navigation';

export function GET() {
  permanentRedirect('/theory/all');
}