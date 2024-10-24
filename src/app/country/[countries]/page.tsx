import Button from "@/components/Button";
import { CountryDetail } from "../../../../types/types";
const countryName = ({ params }: { params: { countries: string } }) => {
  const countryInfo: CountryDetail[] = [
    {
      name: "pakistan",
      population: "231 million",
      capital: "Islamabad",
    },
    {
      name: "bangladesh",
      population: "170 million",
      capital: "Dhaka",
    },
    {
      name: "england",
      population: "56 million",
      capital: "London",
    },
    {
      name: "australia",
      population: "26 million",
      capital: "Canberra",
    },
    {
      name: "china",
      population: "1.4 billion",
      capital: "Beijing",
    },
  ];

  const findCountry = countryInfo.find(
    (countries) =>
      countries.name.toLowerCase() === params.countries.toLowerCase()
  );

  if (!findCountry) {
    return (
      <h1 className="text-red-600 text-3xl font-bold">Country Not Found</h1>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-bl from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center py-20 ">
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-wider">
          Countries Information!
        </h1>

        <div className="flex justify-center">
          <div className=" border-purple-200 hover:scale-105 transition-all cursor-pointer rounded-3xl p-10 shadow-xl shadow-gray-200 bg-gradient-to-tl from-purple-200 to-purple-300 ">
            <p>
              <span className="font-semibold text-purple-800 pr-4">Name:</span>
              <span className="italic text-purple-600">{findCountry.name}</span>
            </p>
            <p>
              <span className="font-semibold text-purple-800 pr-4">
                Population:
              </span>
              <span className="italic text-purple-600">
                {findCountry.population}
              </span>
            </p>
            <p>
              <span className="font-semibold text-purple-800 pr-4">
                Capital:
              </span>
              <span className="italic text-purple-600">
                {findCountry.capital}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Button />
        </div>
      </div>
    </>
  );
};

export default countryName;
