import * as yup from 'yup';
const bookRideSchema = yup.object({
  rideType: yup
    .object()
    .shape({
      name: yup.string(),
      id: yup.number()
    })
    .test('rideType', 'Please select a ride type', (value) => !!value.id),
  airport: yup
    .object()
    .shape({
      name: yup.string(),
      subtitle: yup.string(),
      id: yup.number()
    })
    .test('airport', 'Please select an airport', (value) => !!value.id),
  location: yup.string().required(),
  date: yup.date().required('Please pickup a date'),
  time: yup
    .object()
    .test('time', 'Please pickup a time', (value) => value && value.hh && value.mm && value.A),
  flightNumber: yup.string().required('Please enter flight number'),
  fees: yup
    .array()
    .test('fees', 'Please select one fee at least', (value) => value && value.length > 0),
  selectedCar: yup.number().required('Please select a car')
});

export default bookRideSchema;
