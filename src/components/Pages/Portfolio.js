import React from 'react';

const Portfolio = () => {
    const skills = [
        'HTML', 'CSS', 'BootStrapCSS', 'TailWindCSS', 'JavaScript', 'JQeury', 'ReactJs', 'NodeJs', 'ExpressJs', 'MongoDb', 'Wordpress'
    ]
    const imgurl = 'https://media-exp1.licdn.com/dms/image/C5103AQGLAWcIZNVDvQ/profile-displayphoto-shrink_200_200/0/1522209211425?e=1658966400&v=beta&t=EfnyOTa8QqX2bVQ7YcVL6S_bqE9rmFfCTMvFVfNK6yo';
    const projects = [
        'https://water-warehouse-5260e.web.app',
        'https://single-service-provider-1e8c6.web.app/',
        'https://illustrious-capybara-a9a3b8.netlify.app/'
    ]
    return (
        <div>
            <h2 className='text-center text-2xl lg:text-5xl font-bold uppercase p-3 mt-6'>My Portfolio</h2>
            <div className="card w-full bg-base-100 mb-12">
                <figure className="px-10 pt-10">
                    <img src={imgurl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className=" text-center">
                    <h2 className="text-center text-3xl font-bold my-6">Abu Yousuf</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-normal w-full">
                            <thead>
                                <tr>
                                    <th>Particular</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td>imabuyousuf@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>01721139713</td>
                                </tr>
                                <tr>
                                    <td>Education</td>
                                    <td>Hon's (Economics)</td>
                                </tr>
                                <tr>
                                    <td>Skills</td>
                                    <td>{skills.map((s, index) => <span key={index} className='mr-1 bg-primary text-white p-2 rounded-lg'>{s}</span>)}</td>
                                </tr>
                                <tr>
                                    <td>Projects</td>
                                    <td>{projects.map((p, index) => <a key={index} href={p} rel="noreferrer" target='_blank' className='mr-1 bg-primary text-white p-2 rounded-lg'>Visit</a>)}</td>
                                </tr>
                                <tr>
                                    <td>Experieance</td>
                                    <td>Officer, Management Information System @ Hamko Group (6 Yeares) <br />
                                        Freelance Wordpress Developer (3 Yeares)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;