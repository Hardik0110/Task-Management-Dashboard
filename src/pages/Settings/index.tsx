import { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { useMainLayout } from "@/hooks/use-mainlayout";
import Header from "@/components/common/Header";
import SectionHeader from "@/components/common/SectionHeader";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Toggle } from "@/components/ui/Toggle";

const Settings: FC = () => {
  const { toggleSidebar } = useMainLayout();
  const [activeSection, setActiveSection] = useState("general");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    message: true,
    taskUpdate: false,
    taskDeadline: true,
    mentorHelp: false
  });

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      language: "English (Default)",
      timezone: "English (Default)",
      timeFormat: "24 Hours"
    }
  });

  const languages = ["English (Default)", "Spanish", "French"];
  const timezones = ["English (Default)", "UTC", "GMT"];
  
  const currentTimeFormat = watch("timeFormat");

  const onSubmit = (data: { language: string; timezone: string; timeFormat: string }) => {
    console.log("Form data:", data);
  };

  const selectOption = (field: "language" | "timezone", value: string) => {
    setValue(field, value);
    if (field === "language") {
      setIsLanguageOpen(false);
    } else {
      setIsTimezoneOpen(false);
    }
  };

  const renderDropdown = (
    field: "language" | "timezone",
    label: string,
    options: string[],
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
  ) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <Button
        type="button"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-96 text-left flex items-center justify-between"
      >
        <span>{watch(field)}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </Button>
      {isOpen && (
        <div className="absolute z-10 w-96 mt-1 bg-white border rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => selectOption(field, option)}
            >
              <input
                type="radio"
                name={field}
                value={option}
                checked={watch(field) === option}
                onChange={() => {}}
                className="mr-2"
              />
              {option}
            </div>
          ))}
        </div>
      )}
      <input type="hidden" {...register(field)} />
    </div>
  );

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="p-6">
        <SectionHeader title="" />
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <div className="flex space-x-4 border-b border-gray-200 pb-4 mb-4">
            {["general", "notifications"].map((section) => (
              <Button
                key={section}
                variant="tab"
                selected={activeSection === section}
                onClick={() => setActiveSection(section)}
                type="button"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {activeSection === "general" && (
              <div className="space-y-6">
                {renderDropdown("language", "Language", languages, isLanguageOpen, setIsLanguageOpen)}
                {renderDropdown("timezone", "Timezone", timezones, isTimezoneOpen, setIsTimezoneOpen)}

                <div className="space-y-2">
                  <span className="block text-sm font-medium text-gray-700">Time Format</span>
                  <div className="flex space-x-4">
                    {["12 Hours", "24 Hours"].map((format) => (
                      <Button
                        key={format}
                        type="button"
                        variant="radio"
                        selected={currentTimeFormat === format}
                        onClick={() => setValue("timeFormat", format)}
                      >
                        <div className={`w-4 h-4 rounded-full border ${
                          currentTimeFormat === format
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-300"
                        }`} />
                        {format}
                      </Button>
                    ))}
                  </div>
                  <input type="hidden" {...register("timeFormat")} />
                </div>

                <Button type="submit" variant="primary">Save Changes</Button>
              </div>
            )}

            {activeSection === "notifications" && (
              <div className="mt-4 space-y-6">
                <div className="space-y-4">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4 py-3">
                      <Toggle 
                        pressed={value}
                        onPressedChange={() => setNotifications(prev => ({
                          ...prev, 
                          [key]: !prev[key as keyof typeof notifications]
                        }))}
                      />
                      <h4 className="text-sm font-medium text-gray-900">
                        {key.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} Notifications
                      </h4>
                    </div>
                  ))}
                </div>

                <Button
                  type="button"
                  variant="primary"
                  onClick={() => console.log('Saving notification settings:', notifications)}
                  className="mt-6"
                >
                  Save Changes
                </Button>
              </div>
            )}  
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;