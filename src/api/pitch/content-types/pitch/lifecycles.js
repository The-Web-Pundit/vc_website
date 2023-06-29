module.exports = {
    async afterCreate(event) {
      const { result } = event;
      try {
        await strapi.plugins["email"].services.email.send({
          to: "hello@z3partners.co",
          from: "baddelamanikanta2@gmail.com",
          replyTo: "baddelamanikanta2@gmail.com",
          subject: "New Pitch form submission from Z3Partners Website",
          html: `
                Name :  ${result.Name}  <br/>
                Email : ${result.Email}   <br/>
                LinkedIn : ${result.LinkedIn}   <br/>
                Company : ${result.Company}   <br/>
                Idea : ${result.Idea}   <br/>
  
              `,
        });
      } catch (err) {
        console.log(err.Message);
      }
    },
  };
  