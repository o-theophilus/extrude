export const hero = [
		{
			icon: 'box',
			title: 'Made to order',
			text: 'Every print is produced for your specific needs, from a single piece to small batches.'
		},
		{
			icon: 'palette',
			title: 'Made your way',
			text: 'Choose from a range of materials, colours and finishes to get the result you want.'
		},
		{
			icon: 'zap',
			title: 'From idea to object',
			text: 'Send us a file, photo, sketch or description and we\'ll help turn it into a physical product.'
		}
	];

export const whatWePrint = [
		{
			icon: 'shapes',
			title: 'Custom Products',
			text: 'Personalised objects, décor, collectibles and one of a kind pieces.'
		},
		{
			icon: 'award',
			title: 'Business & Branding',
			text: 'Awards, trophies, logo pieces, displays and branded objects.'
		},
		{
			icon: 'box',
			title: 'Prototypes',
			text: 'Bring product concepts to life and test ideas before moving into larger scale production.'
		},
		{
			icon: 'wrench',
			title: 'Functional Parts',
			text: 'Brackets, mounts, enclosures, fixtures and replacement parts made for the job.'
		},
		{
			icon: 'gift',
			title: 'Gifts & Personalised Pieces',
			text: 'Custom gifts and memorable pieces made for special people and occasions.'
		},
		{
			icon: 'printer',
			title: 'Custom Prints',
			text: "Have a model already? Send it over and we'll handle the printing."
		}
	];

export const whyPrint = [
		{
			icon: 'box',
			title: 'One piece is enough',
			text: 'Need just one? No problem. Create a single custom piece without ordering hundreds.'
		},
		{
			icon: 'clipboard-list',
			title: 'Prototype before production',
			text: 'Test the size, shape and feel of a product before investing in manufacturing.'
		},
		{
			icon: 'lightbulb',
			title: 'Create what you cannot find',
			text: 'When an off the shelf solution does not exist, make one that fits your exact needs.'
		},
		{
			icon: 'layers',
			title: 'Small batches made simple',
			text: 'Produce limited quantities without the setup and tooling required by traditional manufacturing.'
		}
	];

export const workFilters = ['All', 'Custom', 'Business', 'Prototypes', 'Parts', 'Gifts'];

export const workIcons = {
		Custom: 'shapes',
		Business: 'award',
		Prototypes: 'box',
		Parts: 'wrench',
		Gifts: 'gift'
	};
export const workItems = [
		{ category: 'Custom', label: 'Personalised décor piece' },
		{ category: 'Business', label: 'Branded trophy' },
		{ category: 'Prototypes', label: 'Product concept model' },
		{ category: 'Parts', label: 'Replacement bracket' },
		{ category: 'Gifts', label: 'Personalised keepsake' },
		{ category: 'Custom', label: 'One of a kind collectible' },
		{ category: 'Business', label: 'Logo display piece' },
		{ category: 'Parts', label: 'Functional enclosure' }
	];

export const materials = [
		{ name: 'PLA', text: 'Versatile, reliable and ideal for everyday prints, models, gifts and decorative pieces.' },
		{ name: 'PLA Matte', text: 'A smooth, understated finish for premium looking models and display pieces.' },
		{ name: 'PLA Silk', text: 'A distinctive finish for decorative pieces, gifts and eye catching designs.' },
		{ name: 'PETG', text: 'Durable and suitable for functional parts that need more strength and resistance.' },
		{ name: 'TPU', text: 'Flexible printing for applications that need some give.' }
	];

export const capabilities = [
		{ icon: 'box', label: 'Build Volume', value: '220 × 220 × 220 mm' },
		{ icon: 'palette', label: 'Multi Colour', value: 'Up to 4 colours' },
		{ icon: 'printer', label: 'Print Type', value: 'FDM 3D printing' },
		{ icon: 'clock', label: 'Typical Turnaround', value: '2 to 5 working days' }
	];

export const pricingFactors = [
		{ icon: 'maximize', title: 'Size', text: 'Larger prints generally require more material and machine time.' },
		{ icon: 'layers', title: 'Material', text: 'The material selected affects both appearance and performance.' },
		{ icon: 'clock', title: 'Print Time', text: 'More complex or detailed prints can require longer production times.' },
		{ icon: 'copy', title: 'Quantity', text: 'Multiple pieces may change the overall production cost.' },
		{ icon: 'sparkles', title: 'Finishing', text: 'Sanding, painting, assembly and other finishing work can be added when needed.' }
	];


export const faqs = [
	{
		category: 'General',
		items: [
			{
				q: 'Do I need a 3D file?',
				a: "No. You can send us a photo, sketch or description of what you need. If modelling is required, we'll let you know and quote it separately."
			},
			{
				q: 'What can you print?',
				a: 'We print custom products, prototypes, branded objects, gifts, replacement parts, functional components and more.'
			},
			{
				q: 'How much does 3D printing cost?',
				a: "It depends on the size, material, print time, quantity, colour and finishing required. Send us your requirements and we'll provide a quote."
			},
			{
				q: 'How long does a print take?',
				a: 'Most standard jobs take around 2 to 5 working days after approval. Larger or more complex jobs may take longer.'
			},
			{
				q: 'What materials do you use?',
				a: 'We currently offer PLA, PLA Matte, PLA Silk, PETG and TPU. Material availability may vary depending on the project.'
			},
			{
				q: 'Can you print in multiple colours?',
				a: 'Yes. We can produce prints using up to four colours where the design and print requirements allow it.'
			},
			{
				q: 'Can you recreate an existing part?',
				a: "In many cases, yes. Send us clear photos and measurements of the part and we'll assess whether it can be recreated."
			},
			{
				q: 'Do you deliver?',
				a: 'Yes. We offer delivery within Lagos and can arrange nationwide delivery depending on the order.'
			},
			{
				q: 'Can I order just one piece?',
				a: 'Absolutely. There is no requirement to order in bulk.'
			},
			{
				q: 'Where are you based?',
				a: 'Extrude is based in Lagos, Nigeria.'
			},
			{
				q: 'How do I pay?',
				a: 'Payment details and terms will be provided with your quote before production begins.'
			}
		]
	}
];
