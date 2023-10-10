import certifications from 'data/content/certifications';
import Image from 'next/image';

const CertificationSection = () => {
    return (
        <section className="h-full w-full max-w-screen-max p-16" id="experience-section">
            <div className="center-col lg:p-8">
                <h1 className="section-heading text-center">Certification</h1>
                <span className="divider center"></span>
                {/* <p className="center section-subheading"></p> */}
                <div className="flex flex-col gap-4">
                    {certifications.map((item) => (
                        <div
                            key={item.name}
                            className="glass flex flex-row gap-2 p-6 text-custom-inverted"
                        >
                            <figure className="center-col mr-4 basis-16">
                                <Image
                                    src={`/images/${item.logo}`}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                />
                            </figure>
                            <article className="flex-1">
                                <h2 className="text-2xl font-bold">{item.name}</h2>

                                <p className="text-sm text-custom-primary">{item.organization}</p>
                                <p className="text-sm">{item.description}</p>
                                <p className="text-sm text-custom-inverted/80">
                                    Issued {item.issueDate}
                                </p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationSection;
