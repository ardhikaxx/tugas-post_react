import React from 'react';

const AboutPageView: React.FC = () => {
    return (
        <div className="bg-gray-800 py-20">
            <div className="container mx-auto px-4 text-white">
                <h2 className="text-3xl font-bold mb-6">About Us</h2>
                <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lectus ut purus finibus lacinia. Cras ac tristique libero. Vivamus ac luctus mauris, eget viverra elit. Nam sit amet vehicula nunc. Proin ut tincidunt tortor. Integer porta nunc vel magna consequat vehicula. Nunc congue commodo mauris, a lobortis urna sollicitudin vel. Sed at neque est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus dictum vehicula velit, at interdum sapien vestibulum nec. Nam rutrum, mauris a tempor interdum, lectus sapien interdum ligula, id faucibus urna elit sit amet ligula.</p>
                <p className="text-lg mb-4">Nullam eget felis vitae magna pellentesque convallis. Nullam pharetra, orci nec tempor tempus, velit nulla posuere tellus, eu sagittis quam enim ac quam. Proin fermentum dolor et erat volutpat, vel bibendum libero convallis. Aenean nec arcu in tellus convallis luctus non a eros. Phasellus maximus pharetra sapien eget vestibulum. Duis semper, metus at fermentum eleifend, est leo lacinia tortor, nec commodo purus turpis a justo. Vestibulum ac nisl auctor, pulvinar velit eu, convallis nunc.</p>
            </div>
        </div>
    );
};

export default AboutPageView;