import {TopicType} from '@/models';

export function getColor(topic: string) {
  switch (topic) {
    case 'Cypress':
    case 'Nextjs':
      return '#fff';
    case 'Vue':
    case 'Nuxt':
      return 'hsl(161deg 100% 37%)';
    case 'Angular':
    case 'Figma':
    case 'Jest':
      return 'hsl(354deg 78% 43%)';
    case 'Docker':
    case 'Typescript':
      return 'hsl(202deg 100% 48%)';
    case 'Flutter':
    case 'React':
    case 'Tailwind':
      return 'hsl(193deg 100% 50%)';
    case 'Kubernetes':
      return 'hsl(214deg 88% 50%)';
    case 'Mongodb':
    case 'Nodejs':
      return 'hsl(138deg 86% 36%)';
    default:
      return '#fff';
  }
}

export default function TopicTitle({title, topic}: {title: string; topic: TopicType}) {
  return (
    <div className="text-5xl font-bold" style={{color: getColor(topic)}}>
      {title}
    </div>
  );
}
