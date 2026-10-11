import { Service, GalleryProject, Testimonial, BlogPost } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'logo-digitizing',
    title: 'Logo Digitizing',
    shortDesc: 'Convert logos into clean, production-ready embroidery files with crisp small details and balanced stitch densities.',
    fullDesc: 'Our master digitizers map every stitch angle, underlay formula, and pull compensation specifically for your target garment fabric. We ensure zero thread breaks, clean micro-lettering down to 3.8mm, and razor-sharp border registration for left chest and corporate uniforms.',
    iconName: 'Shirt',
    badge: 'Most Popular',
    turnaround: '4 - 8 Hours',
    startingPrice: '$12',
    formats: ['DST', 'PES', 'EMB', 'EXP', 'JEF', 'VP3'],
    features: [
      'Calibrated for pique, performance poly, fleece & twill',
      'Ultra-sharp micro lettering down to 3.8mm',
      'Smart pathing cuts trim cycles by up to 25%',
      'Includes color sequence sheet & realistic stitch PDF'
    ],
    idealFor: 'Corporate apparel, golf shirts, polo shirts, work uniforms & staff wear',
    sampleImage: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3d-puff',
    title: '3D Puff Digitizing',
    shortDesc: 'Specialized digitizing for raised 3D puff embroidery with perforated outlines and dense satin capping.',
    fullDesc: 'Digitizing for 3D puff requires specialized techniques: double-density satin capping, perimeter travel stitches that perforate EVA foam cleanly without shredding, and customized pull compensation to prevent foam peek-throughs on structured hats.',
    iconName: 'Layers',
    badge: 'High Demand',
    turnaround: '6 - 12 Hours',
    startingPrice: '$18',
    formats: ['DST', 'EMB', 'PES', 'EXP'],
    features: [
      'Calibrated specifically for 2mm & 3mm high-density EVA foam',
      'Pre-perforating travel outlines for effortless foam peel',
      'Compensated stitch tension preventing cap crown distortion',
      'Tested on Richardson 112, Yupoong Classics & Flexfit'
    ],
    idealFor: 'Structured snapbacks, trucker caps, beanies & streetwear headwear',
    sampleImage: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cap-digitizing',
    title: 'Cap & Hat Digitizing',
    shortDesc: 'Optimized files for curved surfaces and caps, digitizing bottom-up and center-out for zero fabric bunching.',
    fullDesc: 'Standard flat embroidery files fail on curved cap hoops. We strictly digitize caps from bottom-up and center-out, accounting for bill clearance, seam crossings, and crown stiffness with heavy-duty bridge underlay.',
    iconName: 'Crown',
    badge: 'Zero Puckering',
    turnaround: '4 - 8 Hours',
    startingPrice: '$14',
    formats: ['DST', 'PES', 'EMB', 'EXP'],
    features: [
      'Engineered bottom-to-top & center-to-edge stitching paths',
      'Reinforced bridge underlay over center crown seams',
      'Tested with standard 270° cap frames and low-profile crowns',
      'Clean lock stitches preventing unraveling around bill'
    ],
    idealFor: 'Baseball caps, dad hats, 5-panel truckers, visor trims & knit beanies',
    sampleImage: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'applique-digitizing',
    title: 'Applique Digitizing',
    shortDesc: 'Professional applique preparation, precision placement guides, and tack-down stitch planning for fabric cutouts.',
    fullDesc: 'Cut massive stitch counts and run times by replacing solid thread fields with twill, felt, or printed fabrics. We program clear placement lines, material tack-down walks, and clean satin or zig-zag edge finishes.',
    iconName: 'Scissors',
    badge: 'Fabric Saver',
    turnaround: '6 - 12 Hours',
    startingPrice: '$16',
    formats: ['DST', 'EMB', 'PES', 'EXP', 'SVG'],
    features: [
      'Step-by-step placement line and tack-down stops',
      'Includes 1:1 scale SVG vector template for laser / plotter cutting',
      'High-coverage satin borders to conceal raw fabric edges',
      'Greatly reduces garment weight and production time'
    ],
    idealFor: 'Varsity hoodies, school spiritwear, quilt blocks & sports jerseys',
    sampleImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jacket-back',
    title: 'Jacket Back Digitizing',
    shortDesc: 'Large-format artwork optimized for jackets and outerwear, engineered for lightweight comfort and smooth runs.',
    fullDesc: 'Large designs risk garment puckering and extreme machine run times if not planned correctly. We utilize complex fill patterns, tatami grain shifts, and open underlays to deliver magnificent coverage while keeping stitch counts lean and wearable.',
    iconName: 'Shield',
    badge: 'Master Level',
    turnaround: '8 - 18 Hours',
    startingPrice: '$35',
    formats: ['DST', 'PES', 'EMB', 'EXP', 'VP3'],
    features: [
      'Multi-directional tatami grain preventing fabric pulling',
      'Optimized travel paths cutting machine cycle time significantly',
      'Gradient shading and metallic thread compatibility',
      'Complete run sheet with stitch counter milestones'
    ],
    idealFor: 'Varsity jackets, motorcycle back patches, martial arts gis & hoodies',
    sampleImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'small-text',
    title: 'Small Text Digitizing',
    shortDesc: 'Detailed digitizing for micro lettering under 5mm with specialized pull comp and crisp letter openings.',
    fullDesc: 'Small text is the ultimate test of an embroidery digitizer. We adjust kerning, add +0.25mm pull compensation, and apply single-line center-walk underlays so small slogans, names, and medical credentials sew out legibly without thread jamming.',
    iconName: 'Type',
    badge: 'Micro Precision',
    turnaround: '4 - 8 Hours',
    startingPrice: '$12',
    formats: ['DST', 'PES', 'EMB', 'EXP'],
    features: [
      'Tested for letters down to 3.8mm (0.15 inches)',
      'Single-run center underlay prevents column bulk',
      'Calibrated for 60-weight fine thread or standard 40-weight',
      'No looped-closed letters "e", "a", or "o"'
    ],
    idealFor: 'Doctor coats, chef coats, name tapes, safety badges & uniform credentials',
    sampleImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vector-art',
    title: 'Vector Art Conversion',
    shortDesc: 'Convert raster artwork into clean, scalable vector graphics (AI, EPS, SVG, PDF) hand-drawn by artists.',
    fullDesc: 'Never settle for automated auto-trace artifacts. Every node, curve, and stroke is hand-drawn by veteran graphic illustrators to ensure smooth bezier curves, precise Pantone spot colors, and print-ready layers for screen printing, vinyl cutting, and DTF.',
    iconName: 'PenTool',
    badge: '100% Hand Drawn',
    turnaround: '4 - 8 Hours',
    startingPrice: '$10',
    formats: ['AI', 'EPS', 'SVG', 'PDF', 'High-Res PNG'],
    features: [
      '100% manual redraw by vector artists (no auto-trace shortcuts)',
      'Pantone PMS color matching for accurate screen printing',
      'Clean closed paths with minimal anchor nodes for smooth plotter cutting',
      'Delivered in vector curves with editable font packages when requested'
    ],
    idealFor: 'Screen printing, DTF transfers, sublimation, signage & laser engraving',
    sampleImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'custom-patches',
    title: 'Custom Patches',
    shortDesc: 'Digitizing and artwork preparation for embroidered patches, merrowed edges, velcro backs, and laser cut lines.',
    fullDesc: 'Whether you are producing tactical velcro patches, biker rocker sets, or vintage collegiate emblems, we build appropriate border channels, laser-cut guide lines, and loop-pile chainstitch structures for automated or manual patch making.',
    iconName: 'Sparkles',
    badge: 'Specialty',
    turnaround: '6 - 12 Hours',
    startingPrice: '$15',
    formats: ['DST', 'EMB', 'EXP', 'PES'],
    features: [
      'Over-edge merrow borders and laser cut registration lines',
      'Dual-ply twill applique underlay with tack-down stitches',
      'Chenille loop density and moss stitch direction mapping',
      'Heat-seal and velcro backing safety perimeter margins'
    ],
    idealFor: 'Letterman jackets, tactical gear, martial arts badges & club patches',
    sampleImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Apex Tactical 3D Puff Emblem',
    category: '3D Puff',
    clientIndustry: 'Tactical Headwear & Streetwear',
    dimensions: '4.8" W x 2.4" H',
    stitchCount: 14250,
    colorStops: 3,
    format: 'DST & EMB',
    turnaroundTime: '5 Hours',
    originalArtImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    digitizedStitchImage: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    description: 'High-density 3mm EVA foam digitizing for Richardson 112 structured snapback. Perforating perimeter satin caps ensure clean foam tearing with zero exposed backing.',
    highlights: ['3mm EVA foam capping', 'Sharp 90° corner turns', 'Zero thread shredding on seams', 'Tested at 850 RPM']
  },
  {
    id: 'proj-2',
    title: 'Oakridge Country Club Left Chest',
    category: 'Left Chest',
    clientIndustry: 'Luxury Hospitality & Golf Resort',
    dimensions: '3.5" W x 3.2" H',
    stitchCount: 9840,
    colorStops: 5,
    format: 'DST, PES, PDF',
    turnaroundTime: '4 Hours',
    originalArtImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    digitizedStitchImage: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80',
    description: 'Digitized for Peter Millar 100% pique polyester luxury golf polos. Fine serif lettering rendered cleanly at 4.1mm with specialized zig-zag underlay and 60-weight thread support.',
    highlights: ['Micro serif lettering legible down to 4mm', 'Tatami gradient in club shield', 'Pique pull-compensation calibrated', 'Clean single trim between letters']
  },
  {
    id: 'proj-3',
    title: 'Iron Wolves Motorcycle Jacket Back',
    category: 'Jacket Back',
    clientIndustry: 'Apparel & Motor Culture',
    dimensions: '11.8" W x 13.5" H',
    stitchCount: 68400,
    colorStops: 8,
    format: 'DST, EXP, EMB',
    turnaroundTime: '12 Hours',
    originalArtImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    digitizedStitchImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    description: 'Heavyweight oversized back piece for leather vests and heavy denim. Segmented tatami patterns maintain structural flexibility while reducing fabric puckering and machine strain.',
    highlights: ['Multi-layered depth textures', 'Metallic gold thread optimization', '32% faster machine sewout speed', 'Reinforced perimeter satin borders']
  },
  {
    id: 'proj-4',
    title: 'Vanguard Cyber Security Velcro Patch',
    category: 'Patches',
    clientIndustry: 'Corporate & Military Tech',
    dimensions: '3.2" W x 3.8" H',
    stitchCount: 16900,
    colorStops: 4,
    format: 'DST, PES, EMB',
    turnaroundTime: '6 Hours',
    originalArtImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    digitizedStitchImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Precision patch layout with hot-knife laser boundary channel, heavy twill base, and overlocked merrowed border simulation for hook-and-loop velcro backing.',
    highlights: ['Merrowed edge channel built-in', 'High stitch density 0.38mm spacing', 'Velcro backing clearance zone', 'Luminescent neon thread stops']
  },
  {
    id: 'proj-5',
    title: 'Roaring Grizzly Brewery Vector Redraw',
    category: 'Vector Art',
    clientIndustry: 'Craft Beverage & Merchandise',
    dimensions: 'Scalable Vector (Infinite)',
    stitchCount: 0,
    colorStops: 6,
    format: 'AI, EPS, SVG, PDF',
    turnaroundTime: '4 Hours',
    originalArtImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    digitizedStitchImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    description: 'Redrawn from a 72 DPI photographed cocktail napkin. Transformed into crisp Pantone-coded vector layers with clean cut lines ready for automatic screen separator software.',
    highlights: ['Pantone Solid Coated matched', 'Zero overlapping vector nodes', 'Trapping configured for silk screen', 'Expanded and stroke-based layers included']
  },
  {
    id: 'proj-6',
    title: 'Metro Fire Rescue Station 4 Left Chest',
    category: 'Left Chest',
    clientIndustry: 'First Responders & Uniforms',
    dimensions: '3.8" W x 3.6" H',
    stitchCount: 18200,
    colorStops: 6,
    format: 'DST, EMB, PES',
    turnaroundTime: '5 Hours',
    originalArtImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    digitizedStitchImage: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80',
    description: 'Maltese cross badge digitized for Nomex flame-retardant turnout gear and 5.11 tactical polo shirts. Thread tension engineered for heavy synthetic blends.',
    highlights: ['Aramid flame-resistant thread calibrated', 'Tight tatami background weave', 'Crisp banner text with center underlay', 'Tested on 12-needle Barudan']
  },
  {
    id: 'proj-7',
    title: 'NorthCap Heritage Dad Hat Curve',
    category: '3D Puff',
    clientIndustry: 'Fashion Apparel Brand',
    dimensions: '4.2" W x 1.8" H',
    stitchCount: 11400,
    colorStops: 2,
    format: 'DST, EXP, EMB',
    turnaroundTime: '6 Hours',
    originalArtImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    digitizedStitchImage: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80',
    description: 'Digitized specifically for low-profile unstructured 6-panel caps with center seam travel underlay to prevent needle deflection.',
    highlights: ['Bottom-up sequencing', 'Center seam bridge underlay', '3mm EVA foam capping', 'Clean needle pierce points']
  },
  {
    id: 'proj-8',
    title: 'Heritage Athletic Chenille Applique "V"',
    category: 'Patches',
    clientIndustry: 'Varsity & Collegiate Wear',
    dimensions: '5.5" W x 6.0" H',
    stitchCount: 22100,
    colorStops: 3,
    format: 'DST, EMB',
    turnaroundTime: '8 Hours',
    originalArtImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    digitizedStitchImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Collegiate letterman jacket chenille patch with moss loop fills, chained edge borders, and felt applique tacking stitches ready for automatic mixed-head machines.',
    highlights: ['Chain stitch outer accent', 'Dense wool felt tacking down', 'Dual-color moss pile layering', 'Machine stop signals programmed']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Head of Production',
    company: 'StitchCraft Apparel Co.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verifiedOrder: '520+ Files Digitized',
    comment: 'Candle Digitizing is hands down the best digitizing partner we have ever used in 14 years running 6 Tajima 8-head machines. Zero needle breaks, accurate pull comp, and files are in my inbox before my morning shift even starts.',
    highlight: 'Zero needle breaks on multi-head Tajimas'
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Founder & Lead Designer',
    company: 'NorthCap Headwear Labs',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verifiedOrder: '180+ 3D Puff Cap Files',
    comment: 'Other digitizers simply cannot nail 3D puff on curved Richardson 112s without the foam sticking out through the sides. Candle Digitizing gets the capping angles and underlay perfect on the very first sewout every time.',
    highlight: 'Flawless 3D puff with clean foam tearing'
  },
  {
    id: 'test-3',
    name: 'Derek Washington',
    role: 'Owner',
    company: 'IronGate Screen Printing & Embroidery',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verifiedOrder: '340+ Vector & Embroidery Orders',
    comment: 'Their vector redrawing team is just as talented as their embroidery digitizers. Low-res screenshots sent by walk-in customers turn into clean Pantone-separated vectors in under 4 hours. Saves my shop dozens of hours every week.',
    highlight: 'Super fast vector redraws under 4 hours'
  },
  {
    id: 'test-4',
    name: 'Samantha Lee',
    role: 'Merchandise Director',
    company: 'Pacific Crest Apparel Brands',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    verifiedOrder: '85 Jacket Back Crests',
    comment: 'Their stitch sheets with color sequencing and estimated runtime let our operators load machines seamlessly. Their pricing is fair, revisions are handled promptly, and the customer support at support@candledigitizing.com is stellar.',
    highlight: 'Accurate sewout PDF sheets & fast communication'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'mastering-3d-puff-digitizing-structured-caps',
    title: 'Mastering 3D Puff Embroidery on Structured Caps: Density, Underlay, and Foam Secrets',
    excerpt: 'Discover the exact stitch angles, double-density satin capping formulas, and perforation outlines required for razor-sharp 3D puff without thread breaks.',
    content: `3D Puff embroidery on structured headwear continues to be one of the highest-margin services for commercial decorators. Yet, it remains one of the most frustrating techniques for inexperienced digitizers. When executed poorly, foam peeks through stitch gaps, needles shred during high-speed runs, and curved cap seams cause registration distortion.

### 1. The Critical Capping Technique
Standard flat embroidery relies on an open zig-zag or center-walk underlay. With 3D foam (typically 2mm or 3mm EVA foam), standard underlay will slice through the foam before the top satins can secure it. Instead, master digitizers build perimeter "capping" stitches at both ends of a satin column. These closed cap ends tuck the foam inward and create a rigid boundary.

### 2. Double-Density Satin Formula
A standard flat satin stitch density typically sits between 0.40mm and 0.45mm. For 3D puff, this must be tightened to 0.20mm - 0.25mm. Without this tight density, the foam will push through the stitch fibers during washing or wear.

### 3. Perforating Travel Lines
To ensure that operators can cleanly tear away excess foam without pulling thread or needing tweezers, we program a specialized 1.0mm - 1.2mm travel stitch directly across the border before the column fills.`,
    category: 'Technique',
    readTime: '6 min read',
    publishedDate: 'September 12, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Master Digitizer & Technical Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    tags: ['3D Puff', 'Cap Embroidery', 'Stitch Density', 'EVA Foam']
  },
  {
    id: 'blog-2',
    slug: 'why-auto-digitizing-fails-commercial-embroidery',
    title: 'Why Auto-Digitizing Software Fails on Commercial Multi-Head Embroidery Machines',
    excerpt: 'One-click auto-digitizing promises fast results, but often leads to snapped needles, bird-nesting, and puckered polo shirts. Learn what manual digitizing solves.',
    content: `In an era of artificial intelligence and automated graphics tools, many apparel shops wonder: why can't software just convert a JPEG into a DST file with one click? While software has improved, automated digitizing still lacks the physical understanding of how needle, thread, stabilizer, and fabric interact in real-world physics.

### 1. Fabric Physics and Pull Compensation
Fabric is not paper. As an embroidery machine drives a needle at 900 stitches per minute, thread tension exerts physical pull along the stitch direction, while fabric pushes outward perpendicularly. A computer sees flat pixels; a human digitizer knows that a 4-inch circle will sew out as an egg unless compensated with +0.3mm pull allowance along the axis.

### 2. Underlay Architecture
Auto-digitizing usually applies generic, one-size-fits-all underlay. On a knit polo shirt, inadequate underlay allows top satins to sink into the fabric weave. On heavy canvas, excessive underlay turns the garment stiff as cardboard. Manual digitizers build custom lattice, edge-walk, and zig-zag underlay specifically calibrated to the fabric.

### 3. Trim Sequences & Machine Efficiency
Auto-digitizing creates erratic travel paths with dozens of unnecessary thread trims. On a commercial 8-head machine, 40 extra trims add up to 8 minutes of lost production time per run.`,
    category: 'Industry Guide',
    readTime: '5 min read',
    publishedDate: 'September 4, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Quality Assurance Lead',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    tags: ['Auto-Digitizing', 'Machine Maintenance', 'Pull Comp', 'Commercial Tips']
  },
  {
    id: 'blog-3',
    slug: 'small-lettering-secrets-embroidery-digitizing',
    title: 'The Art of Micro-Lettering: How to Digitize Text Under 5mm for Clean Uniforms',
    excerpt: 'Tired of closed loops on letter "e" and jagged serifs? Here is the exact technical blueprint for digitizing legible micro-text for left chest uniforms.',
    content: `Small text—especially company slogans, department names, and medical credentials under 5mm (0.20 inches)—is the ultimate test of any embroidery digitizer. When text turns into illegible thread blobs, it ruins an otherwise beautiful corporate polo.

### 1. Switching to 60-Weight Thread & 65/9 Needles
Standard commercial embroidery runs on 40-weight rayon or polyester thread with an 75/11 needle. However, for lettering under 4.5mm, 40-weight thread is simply too thick to form delicate serifs and inner counters. Upgrading to a 60-weight thread (30% thinner) and a slim 65/9 ballpoint or sharp needle allows crisp definition in letter centers.

### 2. Pull Compensation Strategies
Thread tension naturally pulls satin stitches tighter, narrowing thin columns. For tiny lettering, columns can collapse into a single thread width. We dial in a +0.25mm pull compensation and utilize single-stitch center run underlay rather than double zig-zag, preventing bulk buildup.

### 3. Open Kerning and Connection Trims
Never keep standard typographic kerning on tiny embroidered text. Add 15-20% extra letter spacing, and program clean single-stitch lockoffs to eliminate messy trim tails on high-speed multi-head runs.`,
    category: 'Technique',
    readTime: '6 min read',
    publishedDate: 'August 28, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Master Digitizer & Technical Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80',
    tags: ['Small Lettering', 'Polo Shirts', 'Thread Specs', 'Underlay']
  }
];

export const FAQS_DATA = [
  {
    question: 'What embroidery file formats do you provide?',
    answer: 'We provide all commercial and home machine embroidery formats including Tajima (.DST), Brother / Babylock (.PES), Wilcom (.EMB), Melco (.EXP), Janome (.JEF), Husqvarna / Viking (.HUS, .VP3), and Singer (.XXX). For vector art orders, we deliver native Adobe Illustrator (.AI), Scalable Vector (.SVG), Encapsulated PostScript (.EPS), Print-Ready PDF, and high-resolution transparent PNG.'
  },
  {
    question: 'How long does digitizing take?',
    answer: 'Our standard turnaround is 12 to 24 hours. We also provide an Express 4 to 8 hour rush service and Same-Day rush delivery for critical production deadlines. Every order receives our full digital sew-out inspection and color run sheet prior to dispatch.'
  },
  {
    question: 'Can you digitize a low-resolution logo?',
    answer: 'Yes, absolutely! We frequently work with low-resolution JPEGs, mobile phone photos of business cards, rough napkin sketches, and worn garments. Our in-house artists clean up and reconstruct the geometry before digitizing to ensure your embroidery sews out crisp and sharp.'
  },
  {
    question: 'Do you offer 3D puff digitizing?',
    answer: 'Yes, 3D puff foam digitizing is one of our flagship specialties. We program customized perforating travel paths, double-density satin capping (0.22mm), and seam crossing bridges engineered for 2mm and 3mm EVA foam on structured snapbacks, dad hats, and beanies.'
  },
  {
    question: 'Can you digitize small text?',
    answer: 'Yes! We specialize in micro-lettering down to 3.8mm (0.15 inches). We utilize single-line center underlay, customized pull compensation, and opened letter kerning so small company slogans, websites, and staff credentials sew out completely legible without thread bunching.'
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes, 100%! We offer free minor revisions, size adjustments up to 15%, density recalibrations for different fabric types, and thread sequence edits for 30 days after delivery. Your complete satisfaction and stitch-out perfection are fully guaranteed.'
  },
  {
    question: 'What information should I provide when placing an order?',
    answer: 'For best results, please provide your artwork file, desired width or height dimensions in inches or cm, target garment type (e.g. pique polo, structured cap, hoodie, leather), placement (left chest, hat front, jacket back), and your required machine file format (.DST, .PES, etc.).'
  },
  {
    question: 'Can you create vector artwork?',
    answer: 'Yes, our graphic design department specializes in 100% manual vector art redrawing. We convert pixelated raster artwork into crisp, infinitely scalable vector files (AI, EPS, SVG, PDF) with clean closed paths, Pantone spot color separation, and minimal anchor points for screen printing, vinyl cutting, and DTF transfers.'
  }
];

export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Basic Plan',
    tagline: 'Simple logos & single-color designs',
    startingPrice: '$12',
    turnaround: '12 - 24 Hours',
    badge: 'Popular for Polos',
    color: 'blue',
    features: [
      'Simple corporate logos up to 4" width',
      'Left chest & cap front placement',
      'Up to 10,000 stitches',
      'All machine formats (.DST, .PES, etc.)',
      'PDF color sequence sew-out sheet',
      'Free minor edits & size adjustments'
    ],
    ideal: 'Best for standard text logos, simple icons & staff uniforms'
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    tagline: 'Detailed artwork & multi-color logos',
    startingPrice: '$18',
    turnaround: '12 - 24 Hours',
    badge: 'Most Popular',
    color: 'yellow',
    popular: true,
    features: [
      'Medium detail logos & multi-color art',
      '3D puff foam on structured caps',
      'Micro lettering down to 3.8mm',
      'Fabric-specific pull compensation',
      'All machine formats + raw .EMB file',
      'Unlimited minor adjustments'
    ],
    ideal: 'Best for headwear, sportswear crests & multi-color brand logos'
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    tagline: 'Complex art, jacket backs & emblems',
    startingPrice: '$35',
    turnaround: '18 - 24 Hours',
    badge: 'Large Format',
    color: 'coral',
    features: [
      'Oversized jacket backs (up to 14" x 14")',
      'Multi-layer shading & tatami textures',
      'Applique & laser cut registration files',
      'Complex club crests & detailed mascots',
      'Optimized travel path cuts run time 25%',
      'Dedicated master digitizer review'
    ],
    ideal: 'Best for motorcycle jackets, varsity outerwear & large patches'
  },
  {
    id: 'rush',
    name: 'Rush / Express',
    tagline: 'Urgent deadline same-day delivery',
    startingPrice: '$24',
    turnaround: '4 - 8 Hours',
    badge: 'Fast Delivery',
    color: 'green',
    features: [
      'Priority queue jump on our production floor',
      'Available for left chest, cap, or vector art',
      'Digital sew-out simulation check',
      'All machine formats + high-res preview',
      'Instant direct support via WhatsApp & email',
      'Zero sacrifice in stitch quality'
    ],
    ideal: 'Best for urgent jobs, event deadlines & last-minute production runs'
  }
];

export const STATS_DATA = [
  {
    id: 'stat-1',
    value: '10K+',
    label: 'Designs Digitized',
    subtext: 'Flawlessly tested across world-class commercial machines',
    icon: 'CheckCircle2',
    color: 'blue'
  },
  {
    id: 'stat-2',
    value: '98%',
    label: 'Customer Satisfaction',
    subtext: 'Repeat embroiderers, screen printers & apparel brands',
    icon: 'Heart',
    color: 'coral'
  },
  {
    id: 'stat-3',
    value: '24H',
    label: 'Typical Turnaround',
    subtext: 'With 4-8 hour same-day rush service available anytime',
    icon: 'Clock',
    color: 'yellow'
  },
  {
    id: 'stat-4',
    value: '50+',
    label: 'Supported Formats',
    subtext: 'DST, PES, EMB, EXP, JEF, VP3, AI, EPS, SVG & more',
    icon: 'Layers',
    color: 'green'
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Experienced Digitizers',
    description: 'Our team has 15+ years of real commercial production experience on Tajima, Barudan, Brother, and Melco multi-head equipment.',
    icon: 'Award',
    color: 'blue'
  },
  {
    title: 'Fast Turnaround',
    description: 'Get standard files in 12-24 hours or request our 4-8 hour express rush service when tight print shop deadlines loom.',
    icon: 'Clock',
    color: 'yellow'
  },
  {
    title: 'High-Quality Stitch Files',
    description: 'Every file is manually path-engineered with calibrated underlay and pull compensation to ensure zero thread breaks.',
    icon: 'Sparkles',
    color: 'coral'
  },
  {
    title: 'Free Minor Revisions',
    description: 'Need a slight size adjustment, density modification, or color sequence change? We provide 100% free minor edits for 30 days.',
    icon: 'RefreshCw',
    color: 'green'
  },
  {
    title: 'Multiple File Formats',
    description: 'We deliver all commercial formats including DST, PES, EMB, EXP, JEF, VP3, and scalable vector formats AI, EPS, and SVG.',
    icon: 'FileCode',
    color: 'yellow'
  },
  {
    title: 'Production-Focused Digitizing',
    description: 'We optimize stitch angles and travel runs to cut machine cycle times by up to 25%, saving your operators real money per garment.',
    icon: 'Cpu',
    color: 'blue'
  },
  {
    title: 'Competitive Pricing',
    description: 'Transparent, upfront rates starting at just $12 with no hidden setup fees, volume discounts, and clear stitch quotes.',
    icon: 'DollarSign',
    color: 'green'
  },
  {
    title: 'Reliable Customer Support',
    description: 'Personal, knowledgeable support via WhatsApp and direct email at support@candledigitizing.com with fast responses around the clock.',
    icon: 'Headphones',
    color: 'coral'
  }
];
