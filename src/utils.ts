import { faker } from '@faker-js/faker';

const getFleet = () => {
  const fleet = localStorage.getItem('fleet');
  if (fleet) {
    console.log(fleet)
    return fleet
  }

  const newFleet = faker.company.name();
  localStorage.setItem('fleet', newFleet);
  return newFleet;
};

export { getFleet };  