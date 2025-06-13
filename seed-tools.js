const { db } = require('./firebase');

const tools = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'ai-assistants',
    description: 'An AI language model developed by OpenAI.',
    pricing: 'Free / Premium',
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'ai-assistants',
    description: "Anthropic's conversational AI assistant.",
    pricing: 'Free / Premium',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'ai-assistants',
    description: "Google's multimodal AI assistant.",
    pricing: 'Free / Premium',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    category: 'ai-assistants',
    description: 'Advanced AI model with strong reasoning skills.',
    pricing: 'Premium',
  },
  {
    id: 'grok',
    name: 'Grok',
    category: 'ai-assistants',
    description: "Xai's assistant with real-time info and humor.",
    pricing: 'Free',
  },
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    category: 'ai-assistants',
    description: 'An AI assistant that delivers cited answers from across the web.',
    pricing: 'Free / Pro',
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    category: 'ai-assistants',
    description: 'A company focused on developing helpful and safe AI assistants.',
    pricing: 'Premium',
  },
  {
    id: 'youchat',
    name: 'YouChat',
    category: 'ai-assistants',
    description: 'AI search and chat assistant with real-time info access.',
    pricing: 'Premium',
  },
  {
    id: 'bard',
    name: 'Bard',
    category: 'ai-assistants',
    description: "Google's AI assistant designed for creative help.",
    pricing: 'Premium',
  },
];


const codingDevTools = [
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'coding-development',
    description: 'AI pair programmer by GitHub and OpenAI.',
    pricing: 'Paid / Free trial'
  },
  {
    id: 'replit',
    name: 'Replit',
    category: 'coding-development',
    description: 'Collaborative online IDE with Ghostwriter AI.',
    pricing: 'Free / Premium'
  },
  {
    id: 'codeium',
    name: 'Codeium',
    category: 'coding-development',
    description: 'Free AI coding assistant with IDE support.',
    pricing: 'Free'
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    category: 'coding-development',
    description: 'AI code completion for various editors.',
    pricing: 'Free / Pro'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'coding-development',
    description: 'AI-first code editor based on VS Code.',
    pricing: 'Free / Premium'
  },
  {
    id: 'ai-pr-reviewer',
    name: 'AI PR Reviewer',
    category: 'coding-development',
    description: 'Automated GitHub pull request reviewer.',
    pricing: 'Free / Paid'
  },
  {
    id: 'codium-ai',
    name: 'CodiumAI',
    category: 'coding-development',
    description: 'Generate useful test cases with AI.',
    pricing: 'Free / Premium'
  },
  {
    id: 'mutable-ai',
    name: 'Mutable AI',
    category: 'coding-development',
    description: 'AI for code completion and documentation.',
    pricing: 'Free / Premium'
  },
  {
    id: 'blackbox-ai',
    name: 'Blackbox AI',
    category: 'coding-development',
    description: 'AI for code search and generation.',
    pricing: 'Free / Premium'
  }
];


const customerServiceTools = [
  {
    id: 'zendesk-ai',
    name: 'Zendesk AI',
    category: 'customer-service',
    description: 'AI-powered ticket routing and customer support by Zendesk.',
    pricing: 'Paid / Free trial',
  },
  {
    id: 'intercom',
    name: 'Intercom',
    category: 'customer-service',
    description: 'Customer support platform with AI chatbots and automation.',
    pricing: 'Paid',
  },
  {
    id: 'drift',
    name: 'Drift',
    category: 'customer-service',
    description: 'AI-powered conversational marketing and support.',
    pricing: 'Paid / Demo',
  },
  {
    id: 'liveperson',
    name: 'LivePerson',
    category: 'customer-service',
    description: 'Conversational AI for messaging customer support.',
    pricing: 'Contact for pricing',
  },
  {
    id: 'freshdesk',
    name: 'Freshdesk',
    category: 'customer-service',
    description: 'AI-powered customer service platform by Freshworks.',
    pricing: 'Free / Paid',
  },
  {
    id: 'tawkto',
    name: 'Tawk.to',
    category: 'customer-service',
    description: 'Free live chat and messaging tool for customer support.',
    pricing: 'Free / Add-ons',
  },
  {
    id: 'helpscout',
    name: 'Help Scout',
    category: 'customer-service',
    description: 'Customer support tool with knowledge base and AI suggestions.',
    pricing: 'Paid / Free trial',
  },
  {
    id: 'zoho-desk',
    name: 'Zoho Desk',
    category: 'customer-service',
    description: 'Context-aware help desk software with AI capabilities.',
    pricing: 'Free / Paid',
  },
  {
    id: 'gorgias',
    name: 'Gorgias',
    category: 'customer-service',
    description: 'AI support for ecommerce brands with automated replies.',
    pricing: 'Paid',
  }
];


const emailAssistantTools = [
  {
    id: 'superhuman',
    name: 'Superhuman',
    category: 'email-assistants',
    description: 'A premium email client that uses AI to boost productivity.',
    pricing: 'Paid',
  },
  {
    id: 'missive',
    name: 'Missive',
    category: 'email-assistants',
    description: 'Collaborative email and chat client for teams.',
    pricing: 'Free / Paid',
  },
  {
    id: 'emailtree',
    name: 'EmailTree AI',
    category: 'email-assistants',
    description: 'AI-powered solution to automate email responses and workflows.',
    pricing: 'Paid',
  },
  {
    id: 'flowrite',
    name: 'Flowrite',
    category: 'email-assistants',
    description: 'AI email writing assistant for fast and smart communication.',
    pricing: 'Paid',
  },
  {
    id: 'humata',
    name: 'Humata',
    category: 'email-assistants',
    description: 'AI assistant that summarizes and generates email replies from documents.',
    pricing: 'Free / Paid',
  },
  {
    id: 'mailbutler',
    name: 'Mailbutler',
    category: 'email-assistants',
    description: 'Productivity extension for Apple Mail and Gmail.',
    pricing: 'Free / Paid',
  },
  {
    id: 'sane-box',
    name: 'SaneBox',
    category: 'email-assistants',
    description: 'AI email organizer that filters and prioritizes emails.',
    pricing: 'Paid',
  },
  {
    id: 'compose-ai',
    name: 'Compose AI',
    category: 'email-assistants',
    description: 'AI-powered autocomplete tool for faster email writing.',
    pricing: 'Free / Pro',
  },
  {
    id: 'levity',
    name: 'Levity',
    category: 'email-assistants',
    description: 'AI tool to automate email sorting and tagging.',
    pricing: 'Paid',
  }
];

const imageGenTools = [
  {
    id: 'midjourney',
    name: 'MidJourney',
    category: 'image-generation',
    description: 'AI tool that creates high-quality artistic images from text prompts.',
    pricing: 'Paid'
  },
  {
    id: 'dall-e',
    name: 'DALL·E',
    category: 'image-generation',
    description: 'OpenAI’s image generator from text prompts.',
    pricing: 'Free / Paid'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    category: 'image-generation',
    description: 'Open-source text-to-image diffusion model.',
    pricing: 'Free / Open Source'
  },
  {
    id: 'canva-ai',
    name: 'Canva AI Image Generator',
    category: 'image-generation',
    description: 'Canva’s tool for generating images from text.',
    pricing: 'Free / Pro'
  },
  {
    id: 'bing-image-creator',
    name: 'Bing Image Creator',
    category: 'image-generation',
    description: 'Microsoft’s AI image generator powered by DALL·E.',
    pricing: 'Free'
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    category: 'image-generation',
    description: 'High-quality image generation platform for designers.',
    pricing: 'Free / Premium'
  },
  {
    id: 'dream-by-wombo',
    name: 'Dream by Wombo',
    category: 'image-generation',
    description: 'AI art generator that turns words into artwork.',
    pricing: 'Free / Premium'
  },
  {
    id: 'playground-ai',
    name: 'Playground AI',
    category: 'image-generation',
    description: 'Creative AI tool for generating and editing images.',
    pricing: 'Free / Pro'
  },
  {
    id: 'fotor-ai-image',
    name: 'Fotor AI Image Generator',
    category: 'image-generation',
    description: 'Online photo editor and AI image generator.',
    pricing: 'Free / Paid'
  }
];

const marketingTools = [
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    category: 'marketing',
    description: 'AI-powered content creation for marketers.',
    pricing: 'Free / Pro'
  },
  {
    id: 'jasper-ai',
    name: 'Jasper AI',
    category: 'marketing',
    description: 'AI content generator for marketing and sales.',
    pricing: 'Paid'
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    category: 'marketing',
    description: 'Marketing copy and SEO content generation.',
    pricing: 'Free / Premium'
  },
  {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    category: 'marketing',
    description: 'SEO content optimization using AI insights.',
    pricing: 'Premium'
  },
  {
    id: 'copylimes',
    name: 'Copylimes',
    category: 'marketing',
    description: 'Simple AI copywriting tool for startups.',
    pricing: 'Free / Paid'
  },
  {
    id: 'neuraltext',
    name: 'NeuralText',
    category: 'marketing',
    description: 'AI for SEO briefs and marketing copy.',
    pricing: 'Premium'
  },
  {
    id: 'anyword',
    name: 'Anyword',
    category: 'marketing',
    description: 'Predictive performance AI copy generator.',
    pricing: 'Free / Paid'
  },
  {
    id: 'smartwriter',
    name: 'Smartwriter',
    category: 'marketing',
    description: 'AI email personalization and outreach.',
    pricing: 'Premium'
  },
  {
    id: 'growthbar',
    name: 'GrowthBar',
    category: 'marketing',
    description: 'AI writing assistant for SEO blogs.',
    pricing: 'Free Trial / Paid'
  }
];

const productivityTools = [
  {
    id: 'notion-ai',
    name: 'Notion AI',
    category: 'productivity',
    description: 'Enhances Notion with AI for writing, summarizing, and brainstorming.',
    pricing: 'Free / Premium'
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    category: 'productivity',
    description: 'AI writing assistant for grammar, tone, and clarity.',
    pricing: 'Free / Premium'
  },
  {
    id: 'fireflies',
    name: 'Fireflies.ai',
    category: 'productivity',
    description: 'AI meeting assistant for transcribing and summarizing calls.',
    pricing: 'Free / Premium'
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    category: 'productivity',
    description: 'AI note-taking app with live transcription and collaboration.',
    pricing: 'Free / Premium'
  },
  {
    id: 'magical',
    name: 'Magical',
    category: 'productivity',
    description: 'Text expander and autofill tool for repetitive workflows.',
    pricing: 'Free / Premium'
  },
  {
    id: 'motion',
    name: 'Motion',
    category: 'productivity',
    description: 'AI calendar and task manager that auto-schedules your day.',
    pricing: 'Premium'
  },
  {
    id: 'krisp',
    name: 'Krisp',
    category: 'productivity',
    description: 'AI-powered noise cancellation for calls and meetings.',
    pricing: 'Free / Premium'
  },
  {
    id: 'superhuman',
    name: 'Superhuman',
    category: 'productivity',
    description: 'Fast, AI-assisted email experience for professionals.',
    pricing: 'Premium'
  },
  {
    id: 'read-ai',
    name: 'Read AI',
    category: 'productivity',
    description: 'AI meeting analytics and summaries with engagement metrics.',
    pricing: 'Free / Premium'
  }
];

const seoTools = [
  {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    category: 'seo-tools',
    description: 'Optimize your content based on real-time SERP data.',
    pricing: 'Paid / Free Trial'
  },
  {
    id: 'neuronwriter',
    name: 'NeuronWriter',
    category: 'seo-tools',
    description: 'AI-based SEO content editor and planner.',
    pricing: 'Paid'
  },
  {
    id: 'scalenut',
    name: 'Scalenut',
    category: 'seo-tools',
    description: 'AI-powered content and SEO platform.',
    pricing: 'Free / Premium'
  },
  {
    id: 'marketmuse',
    name: 'MarketMuse',
    category: 'seo-tools',
    description: 'AI for content research, optimization, and planning.',
    pricing: 'Free / Premium'
  },
  {
    id: 'outranking',
    name: 'Outranking',
    category: 'seo-tools',
    description: 'AI content strategy platform for SEO writing.',
    pricing: 'Premium'
  },
  {
    id: 'clearscope',
    name: 'Clearscope',
    category: 'seo-tools',
    description: 'Content optimization tool trusted by top brands.',
    pricing: 'Premium'
  },
  {
    id: 'dashword',
    name: 'Dashword',
    category: 'seo-tools',
    description: 'Simplified content optimization and SEO guidance.',
    pricing: 'Free / Premium'
  },
  {
    id: 'writerzen',
    name: 'WriterZen',
    category: 'seo-tools',
    description: 'Keyword research and topic discovery with AI.',
    pricing: 'Paid'
  },
  {
    id: 'ink-for-all',
    name: 'INK For All',
    category: 'seo-tools',
    description: 'AI content optimization for search and readability.',
    pricing: 'Free / Premium'
  }
];

const socialMediaTools = [
  {
    id: 'buffer',
    name: 'Buffer',
    category: 'social-media',
    description: 'Social media management platform for scheduling and analytics.',
    pricing: 'Free / Premium'
  },
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    category: 'social-media',
    description: 'All-in-one social media management dashboard.',
    pricing: 'Paid / Free Trial'
  },
  {
    id: 'later',
    name: 'Later',
    category: 'social-media',
    description: 'Visual content scheduling for Instagram and other platforms.',
    pricing: 'Free / Premium'
  },
  {
    id: 'sprout-social',
    name: 'Sprout Social',
    category: 'social-media',
    description: 'Advanced social media management and analytics.',
    pricing: 'Premium'
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'social-media',
    description: 'Graphic design tool with social media templates.',
    pricing: 'Free / Premium'
  },
  {
    id: 'linktree',
    name: 'Linktree',
    category: 'social-media',
    description: 'Create a multi-link landing page for social profiles.',
    pricing: 'Free / Premium'
  },
  {
    id: 'missinglettr',
    name: 'Missinglettr',
    category: 'social-media',
    description: 'AI-powered social media scheduling for long-term campaigns.',
    pricing: 'Paid'
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    category: 'social-media',
    description: 'Pinterest and Instagram marketing platform.',
    pricing: 'Paid / Free Trial'
  },
  {
    id: 'zoho-social',
    name: 'Zoho Social',
    category: 'social-media',
    description: 'Social media management for businesses and agencies.',
    pricing: 'Paid / Free Trial'
  }
];

const videoAudioTools = [
  {
    id: 'adobe-premiere-pro',
    name: 'Adobe Premiere Pro',
    category: 'video-audio',
    description: 'Professional video editing with advanced audio mixing tools.',
    pricing: 'Premium'
  },
  {
    id: 'final-cut-pro',
    name: 'Final Cut Pro',
    category: 'video-audio',
    description: 'Apple’s video editor with robust audio synchronization features.',
    pricing: 'Paid'
  },
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve',
    category: 'video-audio',
    description: 'Color grading + Fairlight audio tools for post-production.',
    pricing: 'Free / Premium'
  },
  {
    id: 'filmora',
    name: 'Filmora',
    category: 'video-audio',
    description: 'User-friendly video editor with audio ducking and effects.',
    pricing: 'Free / Premium'
  },
  {
    id: 'vegas-pro',
    name: 'VEGAS Pro',
    category: 'video-audio',
    description: 'AI-powered audio/video alignment for precise editing.',
    pricing: 'Paid'
  },
  {
    id: 'shotcut',
    name: 'Shotcut',
    category: 'video-audio',
    description: 'Open-source editor with audio waveform visualization.',
    pricing: 'Free'
  },
  {
    id: 'iMovie',
    name: 'iMovie',
    category: 'video-audio',
    description: 'Basic Apple tool for quick video/audio sync (macOS/iOS).',
    pricing: 'Free'
  },
  {
    id: 'hitfilm-express',
    name: 'HitFilm Express',
    category: 'video-audio',
    description: 'VFX + audio editing for creators on a budget.',
    pricing: 'Free / Paid Add-ons'
  },
  {
    id: 'capcut',
    name: 'CapCut',
    category: 'video-audio',
    description: 'Mobile/desktop app with auto-sync for audio/video.',
    pricing: 'Free'
  }
];

const voiceAudioTools = [
  {
    id: 'audacity',
    name: 'Audacity',
    category: 'voice-audio',
    description: 'Free tool for voice recording and editing.',
    pricing: 'Free'
  },
  {
    id: 'krisp',
    name: 'Krisp',
    category: 'voice-audio',
    description: 'AI noise cancellation for voice calls/recordings.',
    pricing: 'Free / Premium'
  },
  {
    id: 'voicemod',
    name: 'Voicemod',
    category: 'voice-audio',
    description: 'Real-time voice changer for streaming/gaming.',
    pricing: 'Free / Premium'
  },
  {
    id: 'resemble-ai',
    name: 'Resemble AI',
    category: 'voice-audio',
    description: 'Clone/generate custom AI voices.',
    pricing: 'Paid'
  },
  {
    id: 'auphonic',
    name: 'Auphonic',
    category: 'voice-audio',
    description: 'AI audio leveling for podcasts/voiceovers.',
    pricing: 'Free / Premium'
  },
  {
    id: 'elocance',
    name: 'Elocance',
    category: 'voice-audio',
    description: 'Convert text to audiobooks with natural voices.',
    pricing: 'Paid'
  },
  {
    id: 'podcastle',
    name: 'Podcastle',
    category: 'voice-audio',
    description: 'AI-powered voice recorder and editor for podcasts.',
    pricing: 'Free / Premium'
  },
  {
    id: 'murf-ai',
    name: 'Murf AI',
    category: 'voice-audio',
    description: 'Text-to-speech with studio-quality voices.',
    pricing: 'Paid / Free Trial'
  },
  {
    id: 'nvidia-rtx-voice',
    name: 'NVIDIA RTX Voice',
    category: 'voice-audio',
    description: 'Noise removal for voice streams (requires NVIDIA GPU).',
    pricing: 'Free'
  }
];

const writingContentTools = [
  {
    id: 'grammarly',
    name: 'Grammarly',
    category: 'writing-content',
    description: 'AI-powered grammar checker and writing assistant.',
    pricing: 'Free / Premium ($12/month)',
    compatibility: ['Web', 'Browser Extension', 'Mobile App']
  },
  {
    id: 'hemingway',
    name: 'Hemingway Editor',
    category: 'writing-content',
    description: 'Tool to simplify and strengthen your writing.',
    pricing: 'Free (Web) / $19.99 (Desktop)',
    compatibility: ['Web', 'Desktop App']
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'writing-content',
    description: 'All-in-one workspace for writing and collaboration.',
    pricing: 'Free / $8/month (Pro)',
    compatibility: ['Web', 'Desktop App', 'Mobile App']
  },
  {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    category: 'writing-content',
    description: 'Data-driven content editor for SEO.',
    pricing: '$59/month (Basic)',
    compatibility: ['Web']
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    category: 'writing-content',
    description: 'Generates marketing copy using AI.',
    pricing: 'Free / $49/month (Pro)',
    compatibility: ['Web']
  },
  {
    id: 'prowritingaid',
    name: 'ProWritingAid',
    category: 'writing-content',
    description: 'Grammar checker with style suggestions.',
    pricing: 'Free / $10/month (Premium)',
    compatibility: ['Web', 'Browser Extension', 'Desktop App']
  },
  {
    id: 'scrivener',
    name: 'Scrivener',
    category: 'writing-content',
    description: 'Tool for authors and researchers.',
    pricing: '$49 (One-time)',
    compatibility: ['Desktop App', 'iOS App']
  },
  {
    id: 'jasper',
    name: 'Jasper',
    category: 'writing-content',
    description: 'AI copywriter for businesses.',
    pricing: '$49/month (Starter)',
    compatibility: ['Web']
  },
  {
    id: 'google-docs',
    name: 'Google Docs',
    category: 'writing-content',
    description: 'Real-time collaborative writing.',
    pricing: 'Free',
    compatibility: ['Web', 'Mobile App']
  }
];





async function seedTools() {
  try {
    const batch = db.batch();

    tools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding AI Assistant: ${tool.name}`);
      batch.set(docRef, tool);
    });

    codingDevTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding Coding Tool: ${tool.name}`);
      batch.set(docRef, tool);
    });
    customerServiceTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding customer service: ${tool.name}`);
      batch.set(docRef, tool);
    });  
    emailAssistantTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding email Assistant: ${tool.name}`);
      batch.set(docRef, tool);
    });
    imageGenTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding image  Generation: ${tool.name}`);
      batch.set(docRef, tool);
    });   
     marketingTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding marketing: ${tool.name}`);
      batch.set(docRef, tool);
    });
    productivityTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding marketing: ${tool.name}`);
      batch.set(docRef, tool);
    });
    seoTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding seo tools: ${tool.name}`);
      batch.set(docRef, tool);
    });
    socialMediaTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding social media tools: ${tool.name}`);
      batch.set(docRef, tool);
    });
    videoAudioTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding video Audio tools: ${tool.name}`);
      batch.set(docRef, tool);
    });
    voiceAudioTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding voice audio tools: ${tool.name}`);
      batch.set(docRef, tool);
    });
    writingContentTools.forEach(tool => {
      const docRef = db.collection('tools').doc(tool.id);
      console.log(`Seeding writing content  tools: ${tool.name}`);
      batch.set(docRef, tool);
    });

    await batch.commit();
    console.log('✅ All tools seeded successfully.');
    process.exit(0); // Exit when done
  } catch (error) {
    console.error('❌ Error seeding tools:', error);
    process.exit(1);
  }
}

seedTools(); 