import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';



export const Salesforce: React.FC = () => {
	const salesforceRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const salesforce = salesforceRef.current;
		if (!salesforce) return;

		gsap.fromTo(
			'.salesforce-section',
			{ opacity: 0, scale: 0.9 },
			{
				opacity: 1,
				scale: 1,
				duration: 0.8,
				stagger: 0.2,
				ease: 'power2.out',
			}
		);
	}, []);

	return (
		<div ref={salesforceRef} className="salesforce">
			<section className="salesforce-section hero">
				<div className="gsap-tools-label">{"{ SALESFORCE® Expert }"}</div>
				<h2 className="gsap-scroll-title">SALESFORCE</h2>
		
	
			</section>

			<section className="salesforce-section services">
				<h3 className="section-title">MES SERVICES SALESFORCE</h3>
				<div className="services-grid">
				En cours de développement...
				</div>
			</section>

			<section className="salesforce-section skills-section">
				<h3 className="section-title">COMPÉTENCES TECHNIQUES</h3>
				<div className="salesforce-skills">
					<div className="salesforce-category">
						<h4>Platform & Administration</h4>
						En cours de développement...
					</div>

					<div className="salesforce-category">
						<h4>Development</h4>
						En cours de développement...
					</div>
				</div>

				<div className="salesforce-category">
					<h4>Integration & APIs</h4>
					En cours de développement...
				</div>
			</section>

			<section className="salesforce-section certifications">
				<h3 className="section-title">CERTIFICATIONS</h3>
				<div className="cert-list">
					<div className="cert-item">En Cours</div>
				</div>
			</section>
		</div>
	);
};
