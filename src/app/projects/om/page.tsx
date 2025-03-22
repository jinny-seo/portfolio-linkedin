import Image, { StaticImageData} from "next/image";
import { caseStudyCrayon } from "@/assets/caseStudyImages";
import { ProjectTitleBar } from "@/components/ProjectTitleBar";
import { CardContainer } from "@/components/CardContainer";
import { BulletList } from "@/components/BulletList";
import Windows95Button from "@/components/Windows95Button";

export default function omProject() {
    return (
      <div className="bg-slate-300 border-slate-900 border-b-[0.5px] border-r-[0.5px] rounded-[5px] shadow-lg">
      <div className="border-slate-400 border-t-[0.5px] border-l-[0.5px] rounded-[4px]">
      <div className="border-slate-600 border-b-2 border-r-2 rounded-[4px]">
      <div className="border-slate-300 border-t-[1px] border-l-[1px] rounded-[3px]">
          <div className="border-slate-400 border-b-2 border-r-2 rounded-[2px]">
          <div className="border-slate-100 border-t-2 border-l-2 rounded-[2px]">
              <div className="border-slate-300 border-2 rounded-[2px]">
                  <ProjectTitleBar label="Title bar"/>
                  <div className="flex gap-2 p-2">
                    <div className="w-full"><Windows95Button label="Prev proj"/></div>
                    <div className="w-full"><Windows95Button label="Back to work"/></div>
                    <div className="w-full"><Windows95Button label="Next proj"/></div>
                  </div>
                  <div className="flex flex-col px-6 pt-4 pb-6 gap-6">
                    <h1 className="title-1 mb-0">Project title lorem ipsum dolor sit amet</h1>
                    <p className="text-lg">
                          I led the transformation of AmerisourceBergen's internal pricing tool into a customer-facing platform, helping pharmacy managers identify cost-saving opportunities. Despite push to directly copy the internal PowerBI dashboard due to deadline pressures, I advocated for a deeper redesign and delivered a solution that balanced complex pricing data with intuitive user experience.
                        </p>
                  </div>
              </div>

              <div className="border-slate-300 border-2 border-t-[1px]">
                  <div className="border-slate-100 border-b-2 border-r-2">
                  <div className="border-slate-400 border-t-2 border-l-2">
                      <div className='border-slate-500 border-t-[1px] border-l-[1px]'>
                      <div className='border-slate-300 border-b-[1px] border-r-[1px]'>
                          <Image src={caseStudyCrayon.CrayonHero} alt="" className=""/>
                      </div>
                      </div>
                  </div>       
                  </div>
              </div>



              <div className="border-slate-300 border-2 border-t-[1px]">
                  <div className="border-slate-100 border-b-2 border-r-2">
                  <div className="border-slate-400 border-t-2 border-l-2">
                      <div className='border-slate-500 border-t-[1px] border-l-[1px]'>
                      <div className='border-slate-300 border-b-[1px] border-r-[1px]'>
                        <div className="bg-white">
                      <CardContainer>
                        <h2 className="title-2">Challenges</h2>
                        <p>There were some critical challenges on the Crayon platform, especially around onboarding.</p>
                        <BulletList>
                          <li><b>Self-Service Adoption Gap.</b> Users relied heavily on manual onboarding from customer success teams rather than configuring their own monitoring settings</li>
                          <li><b>Email-Dependent Workflow.</b> Users found value in daily email alerts but struggled to update them or set up new monitoring parameters</li>
                          <li><b>Integration Underutilization.</b> The platform's integration capabilities weren't being fully leveraged due to navigation barriers</li>
                        </BulletList>
                      </CardContainer>
                      </div>
                      </div>
                      </div>
                  </div>       
                  </div>
              </div>
          </div>
          </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
  