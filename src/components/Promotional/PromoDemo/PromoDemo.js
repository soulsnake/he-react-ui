import React from 'react';
import Banner from '../Banner';
import Button from '../../Form/Button';
import BenefitItem from '../BenefitItem';
import BenefitList from '../BenefitList';
import PromoSection from '../Section';
import PromoFooter from '../Footer';
import Highlight from '../Highlight';
import SupportItem from '../SupportItem';
import SupportList from '../SupportList';

class PromoDemo extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#F5F7F8' }}>
        <Banner title="Product Name">
          <p>
            This is a paragraph of text made to emulate a quick description of
            the item being promoted.
          </p>
          <Button large>Activate now</Button>
          <Button large color="white" keyline>
            Find out more
          </Button>
        </Banner>
        <PromoSection>
          <Highlight
            image={{
              src:
                'http://res.publicdomainfiles.com/pdf_view/2/13491430814060.png',
              alt: 'A bandage.',
            }}
          >
            <p>
              What a great description of <em>this product</em>. This is a
              paragraph of text made to emulate a more detailed description of
              the item being promoted.
            </p>
            <p>It's just so versatile!</p>
            <p>
              What a great description of this product. This is a paragraph of
              text made to emulate a more detailed description of the item being
              promoted. It's really good if you take the time to check it out.
            </p>
          </Highlight>
          <h2>Sweet benefits</h2>
          <BenefitList>
            <BenefitItem>
              <em>Really good for this</em> in some truly amazing ways
            </BenefitItem>
            <BenefitItem>
              <em>Really good for this</em> in some truly amazing ways
            </BenefitItem>
            <BenefitItem>
              <em>Really good for this</em> in some truly amazing ways
            </BenefitItem>
            <BenefitItem>
              <em>Really good for this</em> in some truly amazing ways
            </BenefitItem>
          </BenefitList>
        </PromoSection>
        <PromoSection white>
          <h2>Works well with</h2>
          <p>
            What a great description of this product. This is a paragraph of
            text made to emulate a more detailed description of the item being
            promoted. It's really good if you take the time to check it out.
          </p>
          <BenefitList>
            <SupportList>
              sdafsdfa
            </SupportList>
          </BenefitList>
        </PromoSection>
       </div>
    );
  }
}

export default PromoDemo;
