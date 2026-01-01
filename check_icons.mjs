import * as si from 'react-icons/si';
console.log('Amazon:', Object.keys(si).filter(k => k.toLowerCase().includes('amazon') || k.toLowerCase().includes('aws')));
console.log('Google:', Object.keys(si).filter(k => k.toLowerCase().includes('google')));
console.log('GitHub:', Object.keys(si).filter(k => k.toLowerCase().includes('github')));
console.log('Terraform:', Object.keys(si).filter(k => k.toLowerCase().includes('terraform')));
