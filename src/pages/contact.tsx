import { Button } from "@/components/Button";
import SubmissionModal from "@/components/SubmissionModal";
import clsx from "clsx";
import Image from "next/image";
import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Submitting...");

    // Get data from the form.
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/contact";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    if (response.ok) {
      // If the response is OK, open the modal.
      setModalOpen(true);
      toast.success("Submitted!", { id: toastId });
    } else {
      console.error(response);
      toast.error(
        "There was a problem. Please check the captcha and try again.",
        {
          id: toastId,
        }
      );
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative">
      {modalOpen && <SubmissionModal onClose={() => setModalOpen(false)} />}
      <div className="lg:absolute lg:inset-0">
        {/* TODO: change max height when I get my own photos */}
        <div className="flex justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:max-h-[944px]">
          <Image
            className="h-32 w-full max-w-[530px] object-cover lg:max-w-full lg:absolute lg:h-full rounded-xl"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
            priority={true}
            width={950}
            height={950}
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-8 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let&apos;s make it happen
            </h2>
            <p className="mt-4 text-lg text-gray-400 sm:mt-3">
              No matter where you are in the process, I can help you get your
              app made. Fill out this form and I&apos;ll contact you for a free
              consultation.
            </p>
            <form
              onSubmit={handleSubmit}
              action="/api/contact"
              method="post"
              className="mt-9 grid grid-cols-1 gap-y-6 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Company
                  </label>
                  <span
                    id="company-description"
                    className="text-sm text-gray-500"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Phone
                  </label>
                  <span
                    id="phone-description"
                    className="text-sm text-gray-500"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="howCanWeHelp"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Tell me about your idea
                  </label>
                </div>
                <div className="mt-1">
                  <textarea
                    required
                    id="howCanWeHelp"
                    name="howCanWeHelp"
                    aria-describedby="howCanWeHelp-description"
                    rows={4}
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>
              <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium text-gray-400">
                  Budget
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  <div className="flex items-center">
                    <input
                      required
                      id="budget-unknown"
                      name="budget"
                      value="unknown"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-500 border-gray-300"
                    />
                    <label htmlFor="budget-unknown" className="ml-3">
                      <span className="block text-sm text-gray-400">
                        Unknown
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      required
                      id="budget-under-50k"
                      name="budget"
                      value="under 50k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-under-50k" className="ml-3">
                      <span className="block text-sm text-gray-400">
                        Less than $50K
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      required
                      id="budget-50k-100k"
                      name="budget"
                      value="50k-100k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-50k-100k" className="ml-3">
                      <span className="block text-sm text-gray-400">
                        $50K – $100K
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      required
                      id="budget-over-100k"
                      name="budget"
                      value="100k+"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-over-100k" className="ml-3">
                      <span className="block text-sm text-gray-400">
                        $100K+
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="howDidYouHearAboutUs"
                    className="block text-sm font-medium text-gray-400"
                  >
                    How did you hear about me?
                  </label>
                  <span
                    id="howDidYouHearAboutUs-description"
                    className="text-sm text-gray-500"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="howDidYouHearAboutUs"
                    id="howDidYouHearAboutUs"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                />
                ,
                <Button
                  color="indigo"
                  disabled={isSubmitting}
                  className={clsx(isSubmitting && "cursor-wait")}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
