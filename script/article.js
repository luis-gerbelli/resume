const articles = [
    {
        id: "we",
        info: "<p>Besides I have worked at Banco Itaú and Hamburg-Süd for a couple of months before I joined IBM, my whole professional career can be summarized as I have just worked at a single company.</p><p>I joined IBM in 2005 and I have acted as consultant in several projects since then.</p><p>During this time, I have taken part of more than 40 different projects, each one with different proposes and challenges. And these projects were provided for multiple clients.</p><p>I think it is fantastic, because I had the opportunity of knowing different people, diversified business cultures, and multiple ways of working.</p><p>Thus, even though I have officially been worked at a single company, I can perhaps say that I have worked on more than 25 companies in practice.</p><p>Naturally, for more than 15 years, the challenges were changing, my knowledge was improving, and my roles on each project were changing as well.</p><p>Somehow, my career followed the market trend.</p><p>I started working in a time when companies desired a better way to have visibility of their own data through business intelligence (BI) and I have recently worked in a scenario when companies want their technologies have cognitive ability, with artificial intelligence (AI), to deal with the challenges they have been faced.</p><p>The different roles I have acted on these projects can be synthetized in five categories:</p><ul><li>I started as a <b>business analyst</b>, understanding the business requirements and specifying them into technical requirements;</li><li>Then I worked on <b>financial planning</b> projects, for a while, through the implementation of systems which help companies to elaborate their budget plans, consolidating planned information provided by their multiple departments;</li><li>Next, I took part of projects of <b>IT strategy</b>, which it was mapped the current IT state of a company, designed the future desired scenario, and proposed a roadmap to make this transformation;</li><li>More recently, I worked on AI projects, as <b>data scientist</b>, which the objectives were to leverage data-driven insights for companies, making use of machine learning techniques;</li><li>And, permeating all my professional journey, I have worked on <b>management roles</b>, either as project manager, as technical subject-matter expert, or as cognitive and analytics practice leader for IBM Brazil.</li></ul><p>In the middle of 2021, I left IBM Brazil, once I moved with my family to Canada, where we are having the opportunity of experiencing new personal and professional challenges.</p><p>The chart below illustrates when I had the opportunity of working on these different categories. Click on the following image for additional details.</p><a href='./timeline.html' target='_blank'><figure><figcaption><b><i>Figure – My work experiences timeline</i></b></figcaption><img src='./img/timeline.png' alt='Timeline'></figure></a><p>Click on the buttons below to see a little more about each of these work experiences I had.</p><div class='option-button'><div data-id='we-ds'>Data scientist</div><div data-id='we-mr'>Management role</div><div data-id='we-ic'>IT consultant</div><div data-id='we-fc'>Financial consultant</div><div data-id='we-ba'>Business analyst</div></div><p><i>Note: The categories are disposed in reverse chronological order.</i></p>"
    },
    {
        id: "we-ds",
        info: "<p>As data scientist, I have worked on multiple projects embracing basically two areas of expertise: predictive analytics and prescriptive analytics.</p><p>By predictive analytics, I mean building statistical and mathematical algorithms, with machine learning techniques, aiming at anticipating what may happen. With these predictions, companies are able to foresee what probably would impact their operation and take actions in advance to preserve or leverage them in the market.</p><p>By prescriptive analytics, I mean developing operational research or combinatorial optimization models to help companies to know what is the best action their can take to maximize the results they would reach.</p><p>The activities that I performed on these projects were:</p><ul><li>Understanding of business challenges and gathering of business requirements;</li><li>Analysis of which use case should be prioritized and addressed to find out actionable decisions that would leverage the most value for companies;</li><li>Identification of which machine learning techniques or optimization algorithms apply to thrive more results;</li><li>Analysis of available data, regarding its quality and behavior, to figure out where they could be explored to get more beneficial insights;</li><li>Creation of both predictive and prescriptive models, through the CRISP-DM methodology, aiming at address predictive or prescriptive analytics;</li><li>Use of big data techniques and technologies, to address analytical challenges with both high volume and high complexity data.</li></ul><p>In order to better organize the projects, they are separated between those which have predictive approaches from those which have prescriptive approaches.</p><div class='option-button'><div data-id='we-ds-pd'>Predictive analytics</div><div data-id='we-ds-pc'>Prescriptive analytics</div></div>"
    },
    {
        id: "we-ds-pd",
        info: "<p>The following are the projects, with predictive approaches, in which I acted as data scientist.</p><p>In these projects, it was made use of machine learning techniques to foresee probably results and address the faced challenges.</p><p><i>Note: The projects are listed in reverse chronological order. That is, more recent projects are above older projects.</i></p>"
    },
    {
        id: "we-ds-pd",
        project: "Workforce absenteeism prediction",
        start: "2019-12-01",
        end: "2020-02-01",
        description: "<p>Absenteeism is a complex issue faced by companies. A good prediction – of the impact that labor absences incur on workdays – enable companies to better staffing their workforce.</p><p>It's possible to consciously overallocate the labor workforce to offset the expected nonattendance incurred by absenteeism, avoiding furthermore both a defalcated workforce and an impacted productivity in the production line.</p><p>In this project, a machine learning model was developed to predict the rate of absenteeism for different departments.</p><p>For that, it was made use of multiple sets of data (as historical absenteeism reports, existent positions in the departments, time of the year, proximity of holidays, and so on) to get an accurated predictive model.</p>",
        client: "Mining company (Vale do Rio Doce)",
        role: "Data scientist leader",
        keyword: ["Data science", "Mining", "Microsoft Azure", "Predictive modelling", "Python", "Supervised regression model"]
    },
    {
        id: "we-ds-pd",
        project: "Sentences prediction for labor lawsuits",
        start: "2019-08-01",
        end: "2019-12-01",
        description: "<p>Brazil is a country where rules strict and complicate labor laws. It generates opportunities for employees, after they are fired, to take legal actions against their former employers. It's common for large companies to have thousands and thousands of labor lawsuits applied against them.</p><p>To handle with a large amount of labor lawsuits, it's important to estimate three predictions for each of them: how is the likelihood of win the legal process, how long the process will take, and how much it will cost in case of defeat.</p><p>Firstly, it's essential to know the likelihood of win or lose of a labor lawsuit, because if you know that the probability of defeat is high, you may try to come up with an unofficial judicial agreement, reducing your financial losses.</p><p>On the same way, if you know whether the legal process will take long time to close, you may try to propose an unofficial judicial agreement as well, avoiding recurrent operational costs until the final verdict of the labor lawsuit.</p><p>Lastly, it's important you have a good estimation of how much the labor lawsuit will cost for you, because this amount must be accounting reported in the company income statement as labor provision. A more assertive provision incurs on more accounting stability.</p><p>Therefore, machine learning models was developed (learning from historical concluded legal processes) to generate predictions, suggesting the best action to execute on each on-going labor lawsuit.</p>",
        client: "Food company (BRF)",
        role: "Data scientist leader",
        keyword: ["Data science", "Food", "Predictive modelling", "Python", "Supervised classification model", "Supervised regression model", "Watson Studio"]
    },
    {
        id: "we-ds-pd",
        project: "Default prediction",
        start: "2019-04-01",
        end: "2019-11-01",
        description: "<p>Soccer is a very popular sport in Brazil.</p><p>Nowadays, almost all first-class soccer teams have fidelity programs to encourage their supporters to attend their soccer matches and to leverage their sources of revenue.</p><p>To join these fidelity programs, supporters should adhere to monthly payment signatures.</p><p>Default (non-payment) events for these programs are a huge issue, especially in Brazilian reality. The default rate for fidelity program of this soccer team was very high and it was decided to act to try to minimize it.</p><p>If it is known the probabilities of supporters failure to pay their monthly payment, it's possible to put marketing and/or financial strategies into practice to avoid it.</p><p>So, it was developed a machine learning model which predicts the likelihoods of supporters to failure in bearing their monthly payments.</p>",
        client: "Soccer team (SCCP)",
        role: "Data scientist leader",
        keyword: ["Data science", "Sports", "Predictive modelling", "Python", "Supervised classification model"]
    },
    {
        id: "we-ds-pd",
        project: "Churn prediction",
        start: "2018-12-01",
        end: "2019-02-01",
        description: "<p>The telecommunication competition is very hard and wild. Clients are contested by multiple telco companies on a costly battle.</p><p>As retaining an existing client is cheaper than conquering a new one, a great challenge faced by several companies is: how to avoid churn?</p><p>There are multiple marketing strategies to retain a client, like giving discounts on some products or offering upgrades on an acquired plan.</p><p>Needless to say, applying those strategies in a wrong way (when they should not be applied) incurs in avoidable costs. On the other hand, not applying them (when they should be applied) is costly as well.</p><p>So, knowing the churn probability for each client is an excellent tool to make good use of marketing strategies.</p><p>This project aimed at developed a machine learning model that predicts the churn likelihood for each customer, by analyzing their features and behaviors and highlighting which churn factor predominantly contributes to each prediction.</p>",
        client: "Telecommunication company (Algar)",
        role: "Data scientist leader",
        keyword: ["Data science", "Telecommunication", "Predictive modelling", "Python", "Supervised classification model"]
    },
    {
        id: "we-ds-pd",
        project: "Recommender system",
        start: "2018-11-01",
        end: "2018-12-01",
        description: "<p>What is the next best offer to suggest to customers, when they are adding products to carts during an online shopping?</p><p>Suggesting a new product, with the highest likelihood of acceptance by the customer, can make selling more profitable.</p><p>The challenge of this project was to design and build a recommender system model to be plugged into the retailer website.</p><p>Thus, based on both previously historical purchases and similar customers behaviors, and detecting stock availabilities, the recommender system suggested for the website to show up advice of new products, which are most likely to be bought by each customer, enlarging the online shopping cart.</p>",
        client: "Retail company (Pneubras)",
        role: "Data scientist leader",
        keyword: ["Data science", "Retail", "Association rules", "Predictive modelling", "Python", "Watson Studio"]
    },
    {
        id: "we-ds-pd",
        project: "Lifetime expectancy prediction for truck engines",
        start: "2017-03-01",
        end: "2017-11-01",
        description: "<p>Haul trucks are responsible to transport iron ores from far apart mines to a centralized processing plant in a mining operation. They are large trucks moved by powerful engines.</p><p>Their engines have estimated lifetimes and they are susceptible to not work properly anymore at any time.</p><p>If the haul truck engine breaks in the path between the mine and the plant, a huge financial loss may raise. Not only due to the cost of moving the maintenance equipment and team to a distant area, but mainly because it can block other haul trucks, interrupting the production line.</p><p>The point is to perform corrective maintenances or exchange the engine by a new one before the breakage happens. However, since engines are expensive, exchanges should be avoided as much as possible.</p><p>So, the objective of the project was to create a machine learning model, which predicts how long a haul truck engine can work properly and, consequently, stating the appropriate time of a predictive maintenance.</p><p>It was analyzed several data – as oil samples (concentration of different chemical elements in the oil sample), alarm occurrences, and fuel consumptions – to be possible to recommend which haul truck engine should be exchange at which time.</p><p>Both further mistaken premature discards of engines and further interruption of the production line can be so avoided.</p>",
        client: "Mining company (Vale do Rio Doce)",
        role: "Data scientist leader",
        keyword: ["Data science", "Mining", "Predictive modelling", "Python", "Supervised classification model", "Supervised regression model", "Unsupervised model"]
    },
    {
        id: "we-ds-pd",
        project: "Text mining for classification of documents",
        start: "2017-07-01",
        end: "2017-08-01",
        description: "<p>What if it should be separated thousands and thousands of documents according to some predefined categories of subject? It should be a hard work, shouldn't it?</p><p>It was the challenge of the exchange department of a bank.</p><p>It was desired to make a root cause analysis and find out the correct generator factor (the reason of an exchange document emission) for each one of a large number of documents which arrive at the department.</p><p>The project had the objective of automating this classification process. Making use of text mining techniques, it was built a model that reads the descriptions contained in the documents, classifies them according to a set of predefined generator factors, and forwards them to the correct destinations.</p><p>If the model was not so sure about the correct classification, the document was addressed to a posterior manual handling.</p>",
        client: "Banking company (Banco Itaú)",
        role: "Data scientist",
        keyword: ["Data science", "Banking", "R", "Text mining"]
    },
    {
        id: "we-ds-pd",
        project: "Planting failure prediction",
        start: "2017-03-01",
        end: "2017-04-01",
        description: "<p>In a sugar cane plantation farm, when it doesn't sprout sugar cane in a small portion of a seeded area, this spot won't produce sugar along the next five or six harvests. It's not worth repreparing the soil and reseeding it again, because there is a risk of damaging and unutilized the nearby area.</p><p>Thus, figuring out what are the offenders which cause planting failure in a sugar cane plantation is way to increase the efficient of the agricultural process. If the offenders are known, action plans may be address to get the plantation more profitable.</p><p>This project aimed at detecting which features had stronger correlations with the fact of a sugar cane growing up healthily.</p><p>Based on multiple spectrum of data,  as whether (rainfall index, temperature range, relative humidity), soil composition (rate of different chemical elements in multiple layer of soil), type of seeds, type of machineries used, and workforce scale; it was possible to advice the client recommending the best place to plant sugar cane, the best treatment for the soil, and so on.</p>",
        client: "Agribusiness company (Raízen)",
        role: "Data scientist",
        keyword: ["Data science", "Agribusiness", "Predictive modelling", "SPSS", "Supervised classification model"]
    },
    {
        id: "we-ds-pc",
        info: "<p>The following are the projects, with prescriptive approaches, in which I acted as data scientist.</p><p>In these projects, it was made use of optimization algorithms, as operational research or combinatorial optimization, to address the faced challenges.</p><p><i>Note: The projects are listed in reverse chronological order. That is, more recent projects are above older projects.</i></p>"
    },
    {
        id: "we-ds-pc",
        project: "Sensitivity analysis for chicken productive chains",
        start: "2021-01-01",
        end: "2021-08-01",
        description: "<p>In a company where managers have visibility only of indicators related to their own area and work to reach their individual goals, it is hard for them to realize the impact of their own decision in other areas and in the company as a whole. Decisions taken departmentally don’t always reach the best results for the company.</p><p>To solve this issue, it was created an integrated model that links all stages of a productive chain of grillers (a kind of chicken which is commonly exported from Brazil to East Middle and which was chosen to be the pilot product prototyped in this project) and reveals the influence of a particular decision in the entire chain. Through this model, it was possible to figure out how a decision made in the farms impacts the stocks in destination markets or how an industry performance affects the sale prices, for example.</p><p>An optimization engine was added to this model to suggest the ideal scenario of decisions that should be followed to achieve the highest possible result. Aiming at maximizing the next six-months profit, the model recommended what each area should do, taking into account what’s better for the whole company.</p><p>The solution allowed simulation of different scenarios, where it was possible to vary some drivers or indicators and see their impacts along the productive chain and, consequently, it was also possible to analyze the sensibility of the variation of each indicator in the global profit.</p>",
        client: "Food company (BRF)",
        role: "Data science leader",
        keyword: ["Data science", "Food", "Operational research", "Prescriptive modelling", "Python"]
    },
    {
        id: "we-ds-pc",
        project: "Pricing optimization",
        start: "2019-04-01",
        end: "2019-11-01",
        description: "<p>The client here is the second more popular Brazilian soccer team. One of its biggest source of revenue is the ticket sales for matches which take place on its own stadium.</p><p>Determining how much should be each ticket price is a key point to maximize the total revenue acquired from ticket office.</p><p>It's desired bigger prices and bigger attendances to reach the biggest revenues.</p><p>However, by supply and demand elasticity, the more the price is, the lower the demand is. Thus, how to manage attendance and price to maximize the total revenue?</p><p>The challenge is harder to solve once attendance depends on several external factors, beyond the price: whether the match will be broadcasted on TV, who will be the opponent, whether there is rain forecast or it is expected a sunny day, in which weekday the match will happen, how good is the soccer team performing in the soccer league, and so on.</p><p>It was developed an optimization model, making use of generic algorithms, to recommend the price to be charged for each stadium's sectors, aiming at maximizing the revenue of the match.</p>",
        client: "Soccer team (SCCP)",
        role: "Data scientist leader",
        keyword: ["Data science", "Sports", "Genetic algorithm", "Prescriptive modelling", "Python", "Supervised regression model"]
    },
    {
        id: "we-ds-pc",
        project: "Low short term mine-to-ship transportation planning",
        start: "2017-12-01",
        end: "2018-10-01",
        description: "<p>Iron ores are produced in multiple locations spread across Brazilian territory.</p><p>These ores should be transported and delivered to clients or ports (in case of external clients) within a predefined time window. Deliveries made ahead of the time or with delay incur on costs.</p><p>Ores are transported by trains and the transport takes different lead times, depending on how far mines and clients are.</p><p>Furthermore, iron ores have specifications (as iron concentration, aluminum oxide concentration, silicon dioxide concentration, and humidity rate). Each mines produce ores with different specifications. And clients demand ores imposing their acceptable range of specifications. To attend this demand, iron ores should be blended between mines and clients in stockyards.</p><p>The challenge here was how to optimize the logistic networks, integrating mines, railroads, stockyards, and ships in a low short-term planning, considering the blend of iron ores within the process. That is, how to figure out the best destination for each iron ore batch, which batch of ores should be blended, and which train departure should be chosen.</p><p>All these questions should be answered suggesting actions hour by hour and aiming at minimizing the total cost of operation.</p><p>The solution for this challenge was designed, making use of an operation research model, and was subsequently built with the usage of an optimization engine.</p>",
        client: "Mining company (Vale do Rio Doce)",
        role: "Data scientist leader",
        keyword: ["Data science", "Mining", "Cplex", "Genetic algorithm", "Operational research", "Prescriptive modelling", "Python"]
    },
    {
        id: "we-ds-pc",
        project: "Store location",
        start: "2017-09-01",
        end: "2018-03-01",
        description: "<p>A store location model aims at figuring out – through an analytical approach – where are the recommended places to open new stores (maximizing profitability) and to close existent stores (minimizing losses).</p><p>Based on social, economic, demographic, regional, financial, and operational information, the solution developed here embraced the concept of gravitational forces.</p><p>Each geographical point has both attractive and repulsive forces which influence in the profitability of a store on it.</p><p>The more inhabitants and workers there are in the neighborhood, the stronger is the attractive force on the point. Moreover, the more affordable they are, the stronger is the attractive force as well.</p><p>On the other hand, the more competitors, and other adverse factors, the stronger is the repulsive force on the point.</p><p>It was developed an operation research model and the objective function was to maximize the return of the investment, taking into account the gravitational forces on each point, and to recommend to best place to open a new store, regarding the potential of new demands, the impact of competitors, and the cannibalization on existent stores.</p><p>Due to the large amount of data, it was made use of big data techniques and technologies.</p>",
        client: "Supermarket company (Carrefour)",
        role: "Data scientist leader",
        keyword: ["Data science", "Supermarket", "Cplex", "Operational research", "Prescriptive modelling", "PySpark", "Watson Studio"]
    },
    {
        id: "we-ds-pc",
        project: "Energy optimization",
        start: "2015-03-01",
        end: "2015-08-01",
        description: "<p>In the steelmaking process, there are machineries which produce energy (heating power inherent in gas) and others which consume it.</p><p>If there is a lack of energy to feed the consumer machineries – since the energy produced inside the process isn't enough –, it is necessary to buy extra gas from gas suppliers.</p><p>If there is an excess of gas produced – which cannot be stored in limited gasometers –, it is required to bleeder it, incurring in waste costs and environment impacts.</p><p>The purpose of the project was to optimize the balance of the usage of energy in the entire steelmaking process.</p><p>Using an operational research model, it was possible to figure out the recommended actions to reach the best scenario avoiding both the need of buying external gas or leaking gas into the atmosphere, considering conditions of capacity and pressure of the production lines.</p>",
        client: "Steelmaking company (Usiminas)",
        role: "Data scientist",
        keyword: ["Data science", "Steelmaking", "Cplex", "Operational research", "OPL", "Prescriptive modelling"]
    },
    {
        id: "we-mr",
        info: "<p>I have had opportunities of performing management roles during my career journey.</p><p>Here, I am not meaning about team leadership, but rather I am mentioning management of a whole initiative, as project for instance. (I consider that team leadership is one of responsibilities or activities inherently expected for a data scientist, consultant, or analyst job – mainly if it is needed seniority for that. That is why team leadership is not embraced in this section, but it is a role performed inside other sections.)</p><p>There have been three groups of management roles I had worked on:</p><ul><li>Project manager: responsible for the success of the whole project;</li><li>SME: on demand technical advisor for projects or sales proposals;</li><li>Practice leader: responsible for the success of the practice at IBM.</li></ul><p>In some case, these management roles were cumulated with other technical responsibilities. In others, I performed it exclusively.</p><p>Click on the buttons below to see a little more about each of these work experiences I had.</p><div class='option-button'><div data-id='we-mr-pl'>Practice leader</div><div data-id='we-mr-sm'>SME</div><div data-id='we-mr-pm'>Project manager</div></div><p><i>Note: The groups are disposed in reverse chronological order.</i></p>"
    },
    {
        id: "we-mr-pl",
        info: "<p>As practice leader, I am responsible for both guaranteeing the quality and timeliness of the project deliveries and leveraging new opportunities of sales for existing or new clients.</p><p>Regarding to project deliveries, I have worked on:</p><ul><li>Ensuring the good quality of project deliveries, safeguarding that they are technically supported by best practices;</li><li>Solving critical issues raised from projects;</li><li>Providing hard skill training for employees, improving their technical skills;</li><li>Helping on resource allocation management, ensuring that all projects and proposals can be correctly staffed.</li></ul><p>Regarding to new opportunities of sales (go-to-market), I have worked on:</p><ul><li>Making presentations of solutions and offerings that addressed the challenges faced by clients;</li><li>Developing proof of concepts to show clients how solutions and offerings could operationally and financially help them;</li><li>Elaborating technical sales proposals, defining premises, scopes, scheduling, and staffing plan for an eventual new project;</li><li>Elaborating commercial sales proposals for an eventual new project and negotiating them with clients for agreements that best fit both parts.</li></ul>"
    },
    {
        id: "we-mr-pl",
        project: "Cognitive and analytics practice leader for IBM Services Brazil",
        start: "2020-07-01",
        end: "2021-08-01",
        description: "<p>In IBM, 'Cognitive and Analytics' is a practice that provides expertise for both cognitive solutions and advanced analytics performance.</p><p>By cognitive, it can be considered all practice of providing conversational solutions for clients. When clients need conversational bots implemented in their processes – no matter whether it is chatbot or bot which makes use of voice – developers and curators, who compose the cognitive practice, make it happens.</p><p>And by advanced analytics, it can be considered all practice of providing descriptive, predictive, and prescriptive solutions for clients' requirements. All projects that have machine learning or optimization techniques are supported by this practice. In IBM, data scientists are the main skill that composes the advanced analytics practice.</p>",
        client: "N/A",
        role: "Practice leader",
        keyword: ["Practice leader", "Advisorship", "Go-to-market"]
    },
    {
        id: "we-mr-sm",
        info: "<p>After I have taken part of several projects and have acquired a lot of experience in data science, I have been invited to contribute in multiple opportunities as subject-matter expert (SME).</p><p>Basically, I have acted as a technical reference in data science, advising many projects and new opportunities of sales.</p><p>The roles that I have as SME were:</p><ul><li>Assuring best practices have been applied on on-going projects;</li><li>Sharing my previous experience for both project deliveries and new opportunities of sales;</li><li>Helping  with technical resolution when critical issues raised on projects;</li><li>Performing the same go-to-market activities described in previous section (practice leader).</li></ul><p><i>Note: The projects are listed in reverse chronological order. That is, more recent projects are above older projects.</i></p>"
    },
    {
        id: "we-mr-sm",
        project: "SME for more than 15 data science initiatives",
        start: "2020-05-01",
        end: "2020-12-01",
        description: "<p>The processes in a mining company are broad and complex. They all need to be well managed to everything runs properly. Data science plays a helpful role here, supporting managers to be able to have an accurate view of reality and make a correct decision based on the insights provided.</p><p>In that Brazilian mining company, data science has been highly valued and IBM has run around 15 data science squads, counting on more than 40 data scientists, to leverage data-driven insights and build predictive and prescriptive models.</p><p>I have been the technical advisor for those all squads, which have acted on different processes, as predictive maintenance, occupational health, worker safety, natural environment preservation, to just say a few.</p>",
        client: "Mining company (Vale do Rio Doce)",
        role: "Subject-matter expert",
        keyword: ["Data science", "SME", "Mining", "Microsoft Azure", "Python", "Advisorship"]
    },
    {
        id: "we-mr-sm",
        project: "SME for a HR initiative",
        start: "2020-07-01",
        end: "2020-10-01",
        description: "<p>Increasingly, repetitive and non-core processes are automated by intelligent workflows. Recursive human activities are replaced by automated robots, providing to employees extra time and opportunity to focus in managerial activities which add better value to the company.</p><p>Intelligent workflows need analytical intelligence to perform properly.</p><p>For the automation of a leave of absence management process at a telco company, it was not different: it was necessary to provide to robots the ability of handling with medical certificates – reading its (mostly physical) certificates, checking whether required information were consistently provided by the doctors and processing the leave of absence in transactional systems.</p><p>Identifying how the analytical intelligence (making use of data science and machine learning techniques) should be embedded in the intelligent workflow and how to operationalize it were the challenges of the project.</p>",
        client: "Telecommunication company (Telefônica)",
        role: "Subject-matter expert",
        keyword: ["SME", "Telecommunication", "Advisorship", "IBM Cognos Analytics"]
    },
    {
        id: "we-mr-sm",
        project: "SME for advanced analytics",
        start: "2019-01-01",
        end: "2020-06-01",
        description: "<p>For more than one and a half years, I have acted on demand as SME for multiple on-going projects and multiple new deal proposals.</p><p>If an initiative was related to advanced analytics or data science, I was always invited to contribute as advisor with my previous experience and knowledge.</p>",
        client: "N/A",
        role: "Subject-matter expert",
        keyword: ["SME", "Advisorship", "Go-to-market"]
    },
    {
        id: "we-mr-pm",
        info: "<p>As project manager, I was responsible for planning, supervising and leading projects from their kick-offs through to their completions.</p><p>There was a brunch of duties I performed as project manager on the projects:</p><ul><li>Managing entire projects, aiming at good conductions and successful completions;</li><li>Aiming at assuring the compliance of preestablished scheduling and the quality of deliverables;</li><li>Managing teams, seeking to improve performances and acting in resolution of conflicts;</li><li>Building good relationships with clients and stakeholders;</li><li>Financially controlling the projects, harnessing  revenues, costs, and gross profits;</li><li>Handling the designing and signing off of contracts;</li><li>Looking for opportunities of new projects.</li></ul><p><i>Note: The projects are listed in reverse chronological order. That is, more recent projects are above older projects.</i></p>"
    },
    {
        id: "we-mr-pm",
        project: "Wind forecast",
        start: "2020-10-01",
        end: "2021-03-01",
        description: "<p>In a sustainable world, companies are looking for renewable ways to provide energy for society. Wind energy generator companies convert the wind drift into electrical power, making use of enormous windmills.</p><p>Knowing the strength and direction of winds in advance – on multiple coordinates distributed across the landscape – is the key to manage an efficient and profitable operation.</p><p>So, through this project, it was provided wind predictions, as result of machine learning models, for several client's electric power generation farms.</p><p>The success of this project can be claimed, once the client has requested rollouts of the prediction models to its other farms (which have originally not been included in the scope of the project).</p>",
        client: "Energy company (Omega)",
        role: "Project manager",
        keyword: ["Project management", "Energy", "Python", "Supervised regression model"]
    },
    {
        id: "we-mr-pm",
        project: "Store location",
        start: "2017-09-01",
        end: "2018-03-01",
        description: "<p>A store location model aims at figuring out – through an analytical approach – where are the recommended places to open new stores (maximizing profitability) and to close existent stores (minimizing losses).</p><p>Based on social, economic, demographic, regional, financial, and operational information, the solution developed here embraced the concept of gravitational forces.</p><p>Each geographical point has both attractive and repulsive forces which influence in the profitability of a store on it.</p><p>The more inhabitants and workers there are in the neighborhood, the stronger is the attractive force on the point. Moreover, the more affordable they are, the stronger is the attractive force as well.</p><p>On the other hand, the more competitors, and other adverse factors, the stronger is the repulsive force on the point.</p><p>It was developed an operation research model and the objective function was to maximize the return of the investment, taking into account the gravitational forces on each point, and to recommend to best place to open a new store, regarding the potential of new demands, the impact of competitors, and the cannibalization on existent stores.</p><p>Due to the large amount of data, it was made use of big data techniques and technologies.</p>",
        client: "Supermarket company (Carrefour)",
        role: "Project manager",
        keyword: ["Project management", "Supermarket", "Cplex", "Operational research", "Prescriptive modelling", "PySpark", "Watson Studio"]
    },
    {
        id: "we-mr-pm",
        project: "Roadmap for an analytical environment",
        start: "2014-12-01",
        end: "2015-03-01",
        description: "<p>Sometimes, clients are not satisfying with neither the way their data are stored nor the way they need to handle with it to get what they want.</p><p>The corporate department of this banking required a study to convert its outdated and unstructured data environment into an efficient and robust informational environment.</p><p>The goal was that data would be well structured, it would be possible to get data quickly and easily, and everyone would trust on the accessed information.</p><p>This was an IT strategic consulting project.</p><p>It was proposed a roadmap of improvements which had technical and architectural initiatives for getting the informational environment in a structured and efficient one.</p>",
        client: "Banking company (Banco Santander)",
        role: "Project manager",
        keyword: ["Project management", "IT strategy", "Banking"]
    },
    {
        id: "we-mr-pm",
        project: "Variable compensation for payroll",
        start: "2014-01-01",
        end: "2014-05-01",
        description: "<p>The variable compensation, in this banking company, was calculated through complex and detailed rules. The employees were compensated not only by goals they achieve or exceed, but also by how well they have performed in comparison with their peers.</p><p>Naturally, each department in the company has its own goals and, consequently, the employees should be rated (and paid) according to different goals and performances.</p><p>To calculate these complex and heterogeneous rules and to find out the variable compensation of each employee, it was built a variable compensation system through the use of IBM Cognos TM1 (the previous version of IBM Planning Analytics).</p>",
        client: "Banking company (Banco Santander)",
        role: "Project manager",
        keyword: ["Project management", "Banking", "IBM Cognos TM1"]
    },
    {
        id: "we-mr-pm",
        project: "SAP upgrading and SAP RH implementation",
        start: "2008-04-01",
        end: "2008-12-01",
        description: "<p>This was a two-in-one project. Two initiatives – both related to SAP platform – took place in parallel: a version upgrading for the ERP system and a HR module implementation.</p><p>The ERP system was upgraded from SAP R/3 version to SAP ECC 6.0 version. So, all SAP ERP modules in use (MM, SD, FI, CO, PP, QM, PM, WM, PS, BI, and PI) had their standard or customized configurations adjusted and adapted to the new version. Batches of tests were made to ensure all functionality were properly working. </p><p>Besides that, the SAP ECC HR module was implemented, containing the sub-modules of admission, demission, payroll, occupational health, and training. All system implementation phases (as design, configuration, testing, and deployment) were managed.</p>",
        client: "Healthcare company (Albert Einstein)",
        role: "Project manager officer",
        keyword: ["Project management", "Healthcare", "SAP ECC", "SAP RH"]
    },
    {
        id: "we-ic",
        info: "<p>IT strategy projects are transformational initiatives which intend to improve the current IT architecture, evolving it to advanced stages, according to best practices widely accepted.</p><p>Basically, after mapping the current state of the IT architecture and designing the future state which it is desired to achieve, it is planned a roadmap of initiatives to transform the current IT architecture into the future one.</p><p>The activities I performed as IT strategy consultant on the projects were:</p><ul><li>Understanding and analysis of the current IT architecture;</li><li>Proposition of a new IT architectures based on benchmarking IT architectures;</li><li>Design of roadmaps of initiatives to transform the current IT architecture into the proposed one;</li><li>Elaboration of business cases to ensure the positive financial return on investments for the initiatives mapped in the roadmap.</li></ul><p><i>Note: The projects are listed in reverse chronological order. That is, more recent projects are above older projects.</i></p>"
    },
    {
        id: "we-ic",
        project: "Design of a smart center (CoC)",
        start: "2020-09-01",
        end: "2021-01-01",
        description: "<p>The client was facing two big challenges which should be addressed.</p><p>The first one is that business decisions were made based only on the perspective of whom was taking them. It was not pursued the best for the whole company, but only the benefit of a specific department. So, decisions were biased and it affected the efficiency of the overall productive chain.</p><p>Secondly, the business decisions used to be reactive and corrective. They were taken when the problem had already raised. The client wanted to change it, making decisions taken in advance and problems solved before they happen.</p><p>Thus, it was decided to create a smart center: an area which was responsible for providing integrated information for all company, enabling the perception of the impact of a single decision in the whole productive chain, and revealing anticipated and predictive alerts to trigger a quick and timely preventive action.</p><p>The project objective was to design this smart center. That is, to concept how this new area should operate and to plan the path to follow for moving from the current state to the future one.</p><p>In other words, the goal was to structure the smart center, which should operate in an efficient way, proving anticipated information for all the company and allowing that decisions were taken globally optimized and not departmentally focused.</p>",
        client: "Food company (BRF)",
        role: "Technical program leader",
        keyword: ["IT strategy", "Food", "Informational environment", "Package selection"]
    },
    {
        id: "we-ic",
        project: "Roadmap for an analytical environment",
        start: "2020-04-01",
        end: "2020-04-01",
        description: "<p>There was taking place a merging of two companies (due to an acquisition).</p><p>The IT architectures, which were particular for each company, should be merged as well. </p><p>The objective of the project was to concept a future architecture for the informational environment, taking advantage of the better points of each company, and define a unified IT architecture to be adopted for the whole new merged company.</p>",
        client: "Personal care company (Natura & Co.)",
        role: "Data strategy consultant",
        keyword: ["IT strategy", "Personal care", "Informational environment"]
    },
    {
        id: "we-ic",
        project: "Design of a new digital bank",
        start: "2016-11-01",
        end: "2016-12-01",
        description: "<p>The client was working on the strategy of getting in the online market, through a digital banking.</p><p>In addition to define the marketing and brand strategy, the operational model to be adopted, and transition plan to be followed, it was also important to know whether this strategy was financially sustainable.</p><p>So, I was invited to join the project to elaborate a business case to prove whether the creation of the digital bank would be beneficial and profitable for the company, considering the potential of growth, the valuation of the brand, the decreasing of churn, the additional expenses, the required the investments, and adverse impacts (as cannibalization) on the physical bank.</p>",
        client: "Banking company (Banco Sicredi)",
        role: "Financial consultant",
        keyword: ["IT strategy", "Banking", "Financial viability"]
    },
    {
        id: "we-ic",
        project: "Package selection for an analytical environment",
        start: "2014-09-01",
        end: "2014-10-01",
        description: "<p>The client was facing a transformational process. The propose was to exchange part of its IT systems.</p><p>Current systems had been made through in-house developments and there wasn't an efficient integration between them.</p><p>The idea was to migrate them to an integrated and effective off-the-shelf software.</p><p>So, the scope of the project was defining relevant information to be gathered for a package selection decision, leveraging a right choice of a new platform to support the client's transformational process.</p>",
        client: "Banking company (Banco Itaú)",
        role: "Business intelligence consultant",
        keyword: ["IT strategy", "Banking", "Package selection"]
    },
    {
        id: "we-ic",
        project: "Roadmap for an analytical environment",
        start: "2012-02-01",
        end: "2012-06-01",
        description: "<p>It was a typical IT strategy project. The objective was to transform the informational environment, implementing process, governance, and IT architecture improvements.</p><p>The client intended to solve some pain points which avoided the data warehouse to operate in an efficient way.</p><p>So, it was mapped the current state, proposed initiatives (which aimed at moving the environment toward a benchmarking reference architecture), and defined an implementation roadmap.</p>",
        client: "Banking company (Banco Banrisul)",
        role: "Business intelligence consultant",
        keyword: ["IT strategy", "Banking", "Informational environment"]
    },
    {
        id: "we-fc",
        info: "<p>For ten years, I have worked as consultant for financial planning. My role has been working on structuring, automating, and improving both budget planning and accounting consolidation processes for companies, with the use of IT solution specialized for these purposes.</p><p>The objective was, after understanding the business requirements, configuring the IT financial planning solutions (as known as enterprise performance management solutions), making it possible to have a decentralized and collaborative contribution of planning information provided by multiple areas of the company, a further consolidation of it, and a subsequently generation of financial and accounting reports.</p><p>I had the opportunity of working with two widely known IT solutions of financial planning: SAP BPC and IBM Planning Analytics (former IBM Cognos TM1).</p><p>The activities I performed on these projects were:</p><ul><li>Understanding of the business requirements for budget planning and accounting consolidation processes;</li><li>Design of the configurations of the financial planning solutions to address these requirements;</li><li>Technical developing of the financial planning solutions, through the use of either SAP BPC or IBM Planning Analytics;</li><li>Supporting clients on the use of these financial planning solutions.</li></ul><p>In order to better organize the projects, they are separated between those which were developed through the use of IBM Planning Analytics from those which were developed through the use of SAP BPC.</p><div class='option-button'><div data-id='we-fc-pa'>IBM Planning Analytics</div><div data-id='we-fc-sa'>SAP BPC</div></div><p><i>Note: The groups are disposed in reverse chronological order.</i></p>"
    },
    {
        id: "we-fc-pa",
        info: "<p>The following are the projects I took part of, which were used IBM Planning Analytics as financial planning solution.</p><p>At the time of these projects, IBM Planning Analytics was known as IBM Cognos TM1.</p><p><i>Note: The projects are listed in reverse chronological order. That is, more recent projects are above older projects.</i></p>"
    },
    {
        id: "we-fc-pa",
        project: "Financial consolidation ",
        start: "2016-01-01",
        end: "2016-07-01",
        description: "<p>When the organogram of a company is matricially structured, it is harder to assure that goals and budgets are well and fairly distributed across the company.</p><p>Not always it is easy to conciliate a geographical consolidation of budget planning with a product-oriented consolidation of budget planning. Mainly when the planning process is not centralized and each department has distinct and unconnected goals to pursue.</p><p>Thus, it was built a system for conciliating that multi-dimensional budget planning, making use of IBM Cognos TM1 (the previous version of IBM Planning Analytics).</p><p>Thereby, it was possible to see the budget planning under different perspectives and make adjustments to attend both geographical and product-oriented goals.</p>",
        client: "Banking company (Banco Santander)",
        role: "IBM Planning Analytics (TM1) consultant leader",
        keyword: ["Financial planning", "Banking", "Accounting consolidation", "IBM Cognos Analytics", "IBM Cognos TM1"]
    },
    {
        id: "we-fc-pa",
        project: "HR expenses planning",
        start: "2015-07-01",
        end: "2015-12-01",
        description: "<p>HR expenses are the most relevant expenses for banking companies. Having an accurate planning of HR expense is a must-have need of each department. And simulating the impact of employees movements (hiring, demission, promotion, or transfer) is a powerful tool for each managers to better control their expenses.</p><p>Thus, it was built a HR expenses simulator through the use of IBM Cognos TM1 (the previous version of IBM Planning Analytics), where managers were able to notice the increment – or decrement – of an eventual hiring, demission, promotion, or transfer on their department expenses.</p>",
        client: "Banking company (Banco Santander)",
        role: "IBM Planning Analytics (TM1) consultant leader",
        keyword: ["Financial planning", "Banking", "Budget planning", "IBM Cognos Analytics", "IBM Cognos TM1"]
    },
    {
        id: "we-fc-pa",
        project: "Budget planning ",
        start: "2014-05-01",
        end: "2014-12-01",
        description: "<p>In this project, it was implemented the HR budget planning in IBM Cognos TM1 (the previous version of IBM Planning Analytics).</p><p>The objective of this project was to enable a decentralized and collaborative planning of HR expenses, with a centralized visualization of the trends and behaviors of each type of expenses.</p>",
        client: "Banking company (Banco Santander)",
        role: "IBM Planning Analytics (TM1) consultant",
        keyword: ["Financial planning", "Banking", "Budget planning", "IBM Cognos TM1"]
    },
    {
        id: "we-fc-pa",
        project: "Variable compensation for payroll",
        start: "2014-01-01",
        end: "2014-05-01",
        description: "<p>The variable compensation, in this banking company, was calculated through complex and detailed rules. The employees were compensated not only by goals they achieve or exceed, but also by how well they have performed in comparison with their peers.</p><p>Naturally, each department in the company has its own goals and, consequently, the employees should be rated (and paid) according to different goals and performances.</p><p>To calculate these complex and heterogeneous rules and to find out the variable compensation of each employee, it was built a variable compensation system through the use of IBM Cognos TM1 (the previous version of IBM Planning Analytics).</p>",
        client: "Banking company (Banco Santander)",
        role: "IBM Planning Analytics (TM1) consultant leader",
        keyword: ["Financial planning", "Banking", "Budget planning", "IBM Cognos TM1"]
    },
    {
        id: "we-fc-pa",
        project: "Budget planning ",
        start: "2013-06-01",
        end: "2013-11-01",
        description: "<p>In this project, it was implemented the organizational budget planning in IBM Cognos TM1 (the previous version of IBM Planning Analytics). The following planning processes were implemented:</p><ul><li>Revenues;</li><li>Cost of goods sold and cost of services sold;</li><li>Stock;</li><li>Indirect expenses (human resources, logistic, and marketing);</li><li>Investments.</li></ul>",
        client: "Retail company (FastShop)",
        role: "IBM Planning Analytics (TM1) consultant",
        keyword: ["Financial planning", "Retail", "Budget planning", "IBM Cognos TM1"]
    },
    {
        id: "we-fc-sa",
        info: "<p>The following are the projects I took part of, which were used SAP BPC as financial planning solution.</p><p>Before 2009, SAP BPC was known as SAP BPS.</p><p><i>Note: The projects are listed in reverse chronological order. That is, more recent projects are above older projects.</i></p>"
    },
    {
        id: "we-fc-sa",
        project: "Budget planning ",
        start: "2012-05-01",
        end: "2013-06-01",
        description: "<p>In this project, it was implemented the organizational budget planning in SAP BPC. The following planning processes were implemented:</p><ul><li>Macroeconomic assumptions;</li><li>Revenues;</li><li>Operational production costs;</li><li>Indirect expenses (travel, HR, training, suppliers, insurances, and others);</li><li>Apportionment of costs and expenses.</li></ul><p>In this project, it was also implemented the planning accounting consolidation in SAP BPC. The following statements were implemented:</p><ul><li>Balance sheet;</li><li>Profit and loss statement;</li><li>Cash flow statement.</li></ul>",
        client: "Oil, coal, mining, logistic, and offshore company (EBX)",
        role: "SAP BPC consultant leader",
        keyword: ["Financial planning", "Energy", "Mining", "Accounting consolidation", "Budget planning", "SAP BPC", "SAP BW"]
    },
    {
        id: "we-fc-sa",
        project: "Budget planning ",
        start: "2010-08-01",
        end: "2011-08-01",
        description: "<p>In this project, it was implemented the organizational budget planning in SAP BPC. The following planning processes were implemented:</p><ul><li>Revenues;</li><li>Operational production costs;</li><li>Indirect expenses (RH, suppliers, and others);</li><li>Apportionment of costs and expenses;</li><li>Investments and depreciation.</li></ul><p>In this project, it was also implemented the planning accounting consolidation in SAP BPC. The following statements were implemented:</p><ul><li>Balance sheet;</li><li>Profit and loss statement;</li><li>Cash flow statement.</li></ul>",
        client: "Steelmaking company (Usiminas)",
        role: "SAP BPC consultant leader",
        keyword: ["Financial planning", "Steelmaking", "Accounting consolidation", "Budget planning", "SAP BPC", "SAP BW"]
    },
    {
        id: "we-fc-sa",
        project: "Cash flow planning",
        start: "2010-04-01",
        end: "2010-08-01",
        description: "<p>In this project, it was implemented the planning accounting consolidation for each new real estate development in SAP BPC. The following statements were implemented:</p><ul><li>Cash flow statement according to BRGAAP financial reporting standards;</li><li>Cash flow statement according to international financial reporting standards (IFRS).</li></ul>",
        client: "Real estate company (Brookfield)",
        role: "SAP BPC consultant",
        keyword: ["Financial planning", "Real estate", "Accounting consolidation", "SAP BPC"]
    },
    {
        id: "we-fc-sa",
        project: "Accouting consolidation planning",
        start: "2010-01-01",
        end: "2010-04-01",
        description: "<p>In this project, it was implemented the accounting consolidation in SAP BPC. The following statements were implemented:</p><ul><li>Balance sheet statement;</li><li>Profit and loss statement;</li><li>Cash flow statement.</li></ul>",
        client: "Real estate company (PDG)",
        role: "SAP BPC consultant",
        keyword: ["Financial planning", "Real estate", "Accounting consolidation", "SAP BPC"]
    },
    {
        id: "we-fc-sa",
        project: "Budget planning ",
        start: "2009-03-01",
        end: "2009-12-01",
        description: "<p>In this project, it was implemented the organizational budget planning in SAP BPC. The following planning processes were implemented:</p><ul><li>Macroeconomic assumptions;</li><li>Revenues;</li><li>Corporate and operational expenses;</li><li>Apportionment of costs and expenses;</li><li>Investments;</li><li>Profit and loss statement.</li></ul>",
        client: "Supermarket company (Pão de Açúcar)",
        role: "SAP BPC consultant",
        keyword: ["Financial planning", "Supermarket", "Budget planning", "SAP BPC", "SAP BW"]
    },
    {
        id: "we-fc-sa",
        project: "Budget planning ",
        start: "2006-05-01",
        end: "2007-12-01",
        description: "<p>In this project, it was implemented the organizational budget planning in SAP BPS (the previous version of SAP BPC). The following planning processes were implemented:</p><ul><li>Revenue (sales, pricing, launch of new products, promotion, and taxes);</li><li>Direct costs (standard cost accounting, and overhead);</li><li>Indirect expenses (freight, human resources, and marketing);</li><li>Profit and loss statement.</li></ul>",
        client: "Personal care company (Natura)",
        role: "SAP BPS consultant",
        keyword: ["Financial planning", "Personal care", "Budget planning", "SAP BPS", "SAP BW"]
    },
    {
        id: "we-ba",
        info: "<p>In the beginning of my professional journey, I had the opportunity of working as business analyst on a couple of projects.</p><p>Business analysts understand and map the needs and challenges of the clients and prepare documents, which contain functional specifications that discourse over the gathered business requirements. Those functional specifications are inputs for further technical specifications, which describe how an IT system should operate to address these business needs.</p><p>The activities that I performed as business analysts were:</p><ul><li>Understanding of business challenges and gathering of business requirements;</li><li>Documentation of these requirements in functional specifications;</li><li>Recommendation of process adjustments, when identified improvement opportunities within the business processes.</li></ul><p><i>Note: The projects are listed in reverse chronological order. That is, more recent projects are above older projects.</i></p>"
    },
    {
        id: "we-ba",
        project: "Functional specification for a SAP BW implementation",
        start: "2009-01-01",
        end: "2009-03-01",
        description: "<p>The client had the need of making some of its customers information available for the organization.</p><p>It was required the development of CRM reports to enable managers to have a 360 degrees view of their own customers.</p><p>The challenge of this project was to design these CRM reports and specify how data should be transferred from multiple transactional systems to SAP BW (an SAP data warehouse) and consequently be available for reports consumption.</p>",
        client: "Agribusiness company (Bunge)",
        role: "Business intelligence consultant",
        keyword: ["Business analysis", "Agribusiness", "SAP BW", "Functional specification"]
    },
    {
        id: "we-ba",
        project: "Design of a global template for SAP",
        start: "2009-01-01",
        end: "2009-01-01",
        description: "<p>The client was designing a template to be used as a standard configuration of multiple SAP modules, intending to have a unique and consistent set up for its all subsidiaries spread across the globe. The objective was to have a global criteria defined in advance, avoiding each subsidiary to create divergent criterias by itself.</p><p>I took part of the BI team, which identified analytical indicators and their reporting needs to be standardized and developed during the global SAP implementation.</p>",
        client: "Steelmaking company (Gerdau)",
        role: "Business intelligence consultant",
        keyword: ["Business analysis", "Steelmaking", "SAP BW", "Functional specification"]
    },
    {
        id: "we-ba",
        project: "Functional specification for a new product launches system",
        start: "2008-01-01",
        end: "2008-04-01",
        description: "<p>This personal care company had the commercial strategy of being extremely innovative. So, they had the practice of continuously launching new products with high frequency and, as result of this strategy, their obsolete products were discontinued with high frequency as well.</p><p>On this way, it was required to concept a product lifecycle management system, which intended to consolidate all new launches, manage theirs lifecycle, enable some scenarios simulation, create a business case for each launch, and monitor their post-launch performance.</p><p>This product lifecycle management system aimed at improving the marketing process efficiency and increasing the accuracy of estimated sales.</p>",
        client: "Personal care company (Natura)",
        role: "Business analyst",
        keyword: ["Business analysis", "Personal care", "Functional specification", "Website"]
    },
    {
        id: "we-ba",
        project: "Functional specification for a sale web site",
        start: "2005-12-01",
        end: "2006-03-01",
        description: "<p>It was a project of a new website development. This new website was destinated for resellers from the company personal care products.</p><p>The website intended to provide sales management functionalities, where the resellers could trigger new sales orders, follow their requests up, and consult their sales history records.</p><p>To make it possible, the business requirements should be properly written down in functional specification documents.</p>",
        client: "Personal care company (Natura)",
        role: "Business analyst",
        keyword: ["Business analysis", "Personal care", "Functional specification", "Website"]
    },
    {
        id: "we-ba",
        project: "Logistic process improvements",
        start: "2005-05-01",
        end: "2005-10-01",
        description: "<p>This was the first project I took part of as IBMer and the only one which wasn't related to IT.</p><p>In this project, I had participation in four initiatives:</p><ul><li>Design of performance indicators to measure the efficiency of promotional events;</li><li>Identification of issues and related potential improvements for operational activities performed on distribution centers.</li><li>Creation of a mathematical model, which recommended the best flow of products reposition and distribution within the supply chain;</li><li>Definition of activities, scheduling, and roles to standardize the opening store process.</li></ul>",
        client: "Supermarket company (Carrefour)",
        role: "Business analyst",
        keyword: ["Business analysis", "Supermarket", "Process redesign"]
    }
]