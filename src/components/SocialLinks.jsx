const socials = [
    { href: 'https://www.linkedin.com/in/rohit-jaliminchi-98555224b', label: 'LinkedIn', icon: '💼' },
    { href: 'https://github.com/rohit220604/', label: 'GitHub', icon: '🐙' },
    { href: 'https://twitter.com/yourusername', label: 'Twitter', icon: '🐦' },
  ];
  
  export default function SocialLinks() {
    return (
      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-200"
          >
            <span>{s.icon}</span>
            <span>{s.label}</span>
          </a>
        ))}
      </div>
    );
  }
  