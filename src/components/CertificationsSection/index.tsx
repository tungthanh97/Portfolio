import certifications from 'data/content/certifications';
import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '@assets/icons/external-link-line.svg';

const CertificationSection = () => {
    return (
        <section className="section-wrapper" id="certification-section">
            <div className="center-col lg:p-8">
                <h1 className="section-heading text-center">Certification</h1>
                <span className="divider center"></span>

                <div className="flex flex-col gap-6 lg:px-6">
                    {certifications.map((item) => (
                        <div key={item.name} className="glass relative flex flex-row gap-2 p-6 ">
                            <figure className="center-col mr-4 basis-20">
                                <Image
                                    src={`/images/${item.logo}`}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                />
                            </figure>
                            <article className="flex-1">
                                <h2 className="pr-6 text-2xl font-bold">{item.name}</h2>

                                <p className="text-sm text-custom-primary">{item.organization}</p>
                                <p className="content-base mt-1 !text-sm">{item.description}</p>
                                <p className="mt-2 text-sm text-custom-inverted/80">
                                    Issued {item.issueDate}
                                </p>
                            </article>
                            <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute right-3 top-2"
                            >
                                <ExternalLink className="h-6 w-6 fill-custom-primary lg:h-8 lg:w-8" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationSection;
