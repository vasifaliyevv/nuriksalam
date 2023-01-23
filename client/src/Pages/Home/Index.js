import React,{useEffect,useState} from "react";
import styles from "./Index.module.css";
import axios from "axios"
import Costumer from './Customer'
const Index = () => {
    const [costumers,setCostumers] = useState([])

    useEffect(()=>{
        axios
        .get('http://localhost:8080/api/customers')
        .then((res)=> {setCostumers(res.data)
            console.log(res.data);
        })
    },[])
  return (
    <>
      <section className={styles.sectionheader}>
        <div className={styles.header}>
          <div><h1>Notary Public &</h1>
          <h2>Legal Solutions</h2></div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.
          </p>
        </div>
      </section>

      <section className={styles.sectionarea}>
        <div className={styles.area}>
          <div className={styles.areaheader}>
            <div className={styles.bankir} style={{ marginTop: "50px" }}>
              <h2>
                Practice <span>Areas</span>
              </h2>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>
            </div>
          </div>

          <div className={styles.areacards}>
            <div className={styles.areacard}>
              <div className={styles.areacardmain}>
                <img alt="sekil" src="data:image/png;base64,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" />
                <h1>Bank</h1>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                </p>
              </div>
            </div>
            <div className={styles.areacard}>
              <div className={styles.areacardmain}>
                                <img alt="sekil" src="data:image/png;base64,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" />

                <h1>Bank</h1>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                </p>
              </div>
            </div>
            <div className={styles.areacard}>
              <div className={styles.areacardmain}>
                                                <img alt="sekil" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAABBCAYAAAB1oDyaAAAAAXNSR0IArs4c6QAACqZJREFUaEPtmXlclVUax78v93Ivq4BsISrmhglqLigu5TJqEbanM5WljpaOlfuYW6JZ4p6F1lRaamUuleV8yqBS0xQNyS1BQkUIWQXZhLu/fd6DXpMULgyXsT48f93Pe895zvM7v3Oe7UiyLMv8RUVqBPcnZbaRuT8pcTQy18jcLbgDjcfyFiTFJpMambNpm27BQY3M3YKk2GSS3ZmzWCx8sz+e5gG3EdK+jU1G1dcgu4JTgO378SfmLnsDHy9P1i9fiE9Tr/qyvUY9dgOnlInvfvwpGz/ZSTN/X/ILCnF3dSV61hRCg9vWaFh9DKgVOJ1ej5NWW+26CqjUtAze27aDvfEJ9OraiQVTJ5J4MonoNevQGw2MHv4QwyOH4OHuXq0us9mCRbbgqFbXCavN4DIuZDNy8my8vTyY/M+RhHZoh0atRqVWIVtkjCYT6ZlZvLlpK8eTU9BqHLl/8ABmjB+NJEnCuKzcfCbNjyYzJxcHSeKRiME8FjkUzybuVgCKngqdntjvD7B+6w5atwzk3SUL0Ggcaw3QZnCnz6Qxatpc6wIqBwecnZxwdtJiMpspu1wuACrfB/cL5+nHHqRNUHMrsKsTlXEHE4+xduMWcvIvis9OWg1uLi7id1l5OXqDkavdD+VIb45ZKtaqrdQa3JJZU3FwkDiVepaS0jIs+hIwluCskWjX3IfeIQE0dVN2WQKVFtQuSBpP0HqDtik4VDKgOJtf0tI5fPQEeQWFGI0m8V2r0eDv482dIR2I2bCZvIsFDQduzaK5hHXpCMbLyEWnQJdv+4ZKDkieIeDaHCRVtfNMJjMvREWTk5ffgOBenk2PliaoyAVL5W7XWtSuSF6h4OR706n/F3Ax0x4grI1brfH8YYLkAJ4hSG4tK49wFWlYcKmpjJoeRcykQYQF31YjuHK9kUulek5nFHLmQhEerlraNvOgVYAHnm5a1CqHSh0eHZCa/DHuNRw42ULykZ2MXrStRnAVBhPv/PcEe479St6lcixVer5aRxWtAzwYF9mZPiEBSA6qKwwGXbdhDQNOtkDhMZJTfmb0kq+rBXc2q4jFHx0mKb2A0FY+hHcMECy7uWiEa0/PLeVoai77TmRysbiC4f2DGRfZCTcXJyT/vuDYxAqwYcDp8pHzD3P618JqweUXlTN2RRzFl/U8G9mFxwcFi5ChEJeRV4Kj2oFm3pV3tazCSNSGA8QnZTOkexDzn+6NysUXybeX9f41CDg5/xDoLlYLrqzCwPhV3woQ0c/cRb/QQCsDRpOFUUt3CWArJvS/xozZwn92Hmfz7tOMvidEMKjyDQPnyvtsf3CGS8i5B8Ri1TG3dU8Kr3/6E9NH9ODRu9tZAeQUXmbZlgQOJWWLu9fEVcuHsyPw86rMRoxmC3PX/UBiai7vz7yXlkHtkHx6NAw4ufAEXM6oFpzBaGbM8lhKyw1snhuJm3NlBqIcxznr9vP98UzaBnri5qxBZzCx+vmBNHHRWDfg5LmLjF/1DWMjQxkb2Q0pcKg4mnZmTkbO/QEMxdWCO3W+gGdXxjEmIpSx93WyRizlXj3xypeoVRIfzLkPV6cbJ74K4HEr4lA2aeOsCFya9wYnfzuDky3I2d+BWV8tuM/2p7Jy+xHenT6UjkHe1921Z1bEkZZbzKx/9GRQt5YoYeBG8toniXy6L5Wt84cR2CpUZC/2ZU42I1+IA9l8U3DKq+WbXxxjx/4zbF9wP15u19d6cUfOs+TjBMp1RhHEF4zqTa87AoQX/b3s+jGNhRvjeXvaELp0DEby69MA4DJ3WW24mUPZ8PUpNsWd4qO5kQR4u15ntHLvFKeyKyGND2KTMFkszHmiFxG9br9u3PbvU1i5LZFNsyNo3yoQKWDQrQFOYWfBxnhef35gtWnZ4dPZTI7ZIwL7yn8NQHWFPWUDXv3oEN/9lMGWl4bh7+uLFDBQ1IhTFy4lMzvXDlXBTY7lGy8MomeHa7nlhYtlPB29i4FdWzDnyV6iwlZECeYHf86ie7C/uGvHz+Yz8+19hN8RwKqJA6xHs6TcwJOvfEmAjxtrJ/0NR1dfJL/eQse8FWs4lZJqD3CKQ9kNZp1Y6Nf8Up5a/BVTHuvOQ32vJbpK/Jqz7gcSUnLYNCuCQJ/KLCT1wiVGL/1aVOauWjWlFUbxfYkS5DtdC/KxR86zcEM8854K5z7luLq3RvLsKKr6iXMWiaP8dvR8NI712mZQQsEBMBQJoyr0JsHQ7c08iB53l/VYKf8l/pLLpJjdDO4eJNhTmNIbzcQmnCc5vQDFYfh5uTLm3hCG9mhlnZtXVM7kNXvE2PUz7sHLXVvJmtabwqJiRkycwZB+4bw4cewNvWxNH6ttM8hFSVB6zqoj6v2DHEzKYnvU/aJsuSpKUvzWzuN8+G0yD/drx+RHu6JRV7p9pfRREm7lrk0bXpl9KHKpVMeUtXvFiVj93AA6t/YVbQmp2RDx/6GjJ5i6cBmLZ05iYJ+eNeG44f/V91BMZcjZe60TxRHaGM/KCf3pHdLsOoVKDqmkWl8eOkf7Fl4sGtOXFn7uohq4WKITbCqZieJA4hLPs2bHMQpKKgTTw8JbV+pyCUTy7ip+LnvrPeL2xYv75ufT1A7glDSqIBHKs4XyghIdIxd/JeoxxSlUDcpmi4WPvzvNuq9OYjBa6NbeTzDipFELkEVlevafvEBmfikt/d3594gwwn7nnK4eyYysHMbNjCK8a2eipkxApaq+33Iz5DV3vwxFlWnYFdl1OI1FHx5i1uM9eaDPjXv/StB+/bOjHErKolxvQm8wC+/opFHh7qzhySF38GCftlxxrFdYa4bk3U3Et1lLVnPydCqbVr8qOmF1lZrBIUNxCnLJGbGGkgMq5c2lMh3vv3gPXm437ycqjkJx9QpYpa3golWLyuBqjLMa7aBG8r9btAH3xCfw0vIYRj4yjAkjR9QVl5hnAzhlmIycnwC6PDFJ6YtMfXOvcPuvPTdAsFFncXAUjCmdsOTUczz30qu0bx3E8rkzcHetLI3qKjaCU/BZEIWrvlCs9W1iOlEbDgrX/uLjPcWRq7UofUyvzqKPmZtfwMR5r4hW+vrlLxPg51NrdVUn2A5OmWkxIRceg4oczBaZbXtTWLPjqPCcSuxTWgk2i6RC8u0pYlr6hSwmRy2lQqfjjYWzCW7TymY11Q2sHTihSRaxTy5Nw2KqsHpH5YjOGNGDLm39btCFrGKCsx+SRwdMDq58EbubtZu2iOet+VMm0L1Tx3oBVos7d4P1LAbk4hTBYvxJJf4dFK5+eP/2omhVSpzrvKHSPlc7i9TK7OhNZk4e85bHcOZ8Bm2DWrBq/kx8vev3YbIOzFUBajGA6TKFeem8sz2Wz/eeENlL39BAxj8cjq9vAJKzP2i8kFVafk45J154ks+cFYqmPzuaoXf3ES899S3/O7gqFp1I/oXPY3ezO/5H8XJzZ8dgwrqEUHa5gn2HE8nIyuY2Xx/uHdCXRyMG4+tdt+zDlo2od3BXF9Xp9Gz45Avi9h2kqLgUR0e1ADL27w/Tv3eYtTSyxci6jrEbuKsGKaVL4aVi8TKqPBNXbTHU1XBb5tkdnC1G2GtMIzh77ay99TYyZ+8dtpf+RubstbP21tvInL132F76G5mz187aW+9fmrnfAKHyzYl04NvHAAAAAElFTkSuQmCC" />

                <h1>Bank</h1>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                </p>
              </div>
            </div>
            <div className={styles.areacard}>
              <div className={styles.areacardmain}>
                                                <img alt="sekil" src="data:image/png;base64,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" />

                <h1>Bank</h1>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                </p>
              </div>
            </div>
            <div className={styles.areacard}>
              <div className={styles.areacardmain}>
                                                <img alt="sekil" src="data:image/png;base64,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" />

                <h1>Bank</h1>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                </p>
              </div>
            </div>
            <div className={styles.areacard}>
              <div className={styles.areacardmain}>
                                                <img alt="sekil" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAABBCAYAAAB1oDyaAAAAAXNSR0IArs4c6QAACqZJREFUaEPtmXlclVUax78v93Ivq4BsISrmhglqLigu5TJqEbanM5WljpaOlfuYW6JZ4p6F1lRaamUuleV8yqBS0xQNyS1BQkUIWQXZhLu/fd6DXpMULgyXsT48f93Pe895zvM7v3Oe7UiyLMv8RUVqBPcnZbaRuT8pcTQy18jcLbgDjcfyFiTFJpMambNpm27BQY3M3YKk2GSS3ZmzWCx8sz+e5gG3EdK+jU1G1dcgu4JTgO378SfmLnsDHy9P1i9fiE9Tr/qyvUY9dgOnlInvfvwpGz/ZSTN/X/ILCnF3dSV61hRCg9vWaFh9DKgVOJ1ej5NWW+26CqjUtAze27aDvfEJ9OraiQVTJ5J4MonoNevQGw2MHv4QwyOH4OHuXq0us9mCRbbgqFbXCavN4DIuZDNy8my8vTyY/M+RhHZoh0atRqVWIVtkjCYT6ZlZvLlpK8eTU9BqHLl/8ABmjB+NJEnCuKzcfCbNjyYzJxcHSeKRiME8FjkUzybuVgCKngqdntjvD7B+6w5atwzk3SUL0Ggcaw3QZnCnz6Qxatpc6wIqBwecnZxwdtJiMpspu1wuACrfB/cL5+nHHqRNUHMrsKsTlXEHE4+xduMWcvIvis9OWg1uLi7id1l5OXqDkavdD+VIb45ZKtaqrdQa3JJZU3FwkDiVepaS0jIs+hIwluCskWjX3IfeIQE0dVN2WQKVFtQuSBpP0HqDtik4VDKgOJtf0tI5fPQEeQWFGI0m8V2r0eDv482dIR2I2bCZvIsFDQduzaK5hHXpCMbLyEWnQJdv+4ZKDkieIeDaHCRVtfNMJjMvREWTk5ffgOBenk2PliaoyAVL5W7XWtSuSF6h4OR706n/F3Ax0x4grI1brfH8YYLkAJ4hSG4tK49wFWlYcKmpjJoeRcykQYQF31YjuHK9kUulek5nFHLmQhEerlraNvOgVYAHnm5a1CqHSh0eHZCa/DHuNRw42ULykZ2MXrStRnAVBhPv/PcEe479St6lcixVer5aRxWtAzwYF9mZPiEBSA6qKwwGXbdhDQNOtkDhMZJTfmb0kq+rBXc2q4jFHx0mKb2A0FY+hHcMECy7uWiEa0/PLeVoai77TmRysbiC4f2DGRfZCTcXJyT/vuDYxAqwYcDp8pHzD3P618JqweUXlTN2RRzFl/U8G9mFxwcFi5ChEJeRV4Kj2oFm3pV3tazCSNSGA8QnZTOkexDzn+6NysUXybeX9f41CDg5/xDoLlYLrqzCwPhV3woQ0c/cRb/QQCsDRpOFUUt3CWArJvS/xozZwn92Hmfz7tOMvidEMKjyDQPnyvtsf3CGS8i5B8Ri1TG3dU8Kr3/6E9NH9ODRu9tZAeQUXmbZlgQOJWWLu9fEVcuHsyPw86rMRoxmC3PX/UBiai7vz7yXlkHtkHx6NAw4ufAEXM6oFpzBaGbM8lhKyw1snhuJm3NlBqIcxznr9vP98UzaBnri5qxBZzCx+vmBNHHRWDfg5LmLjF/1DWMjQxkb2Q0pcKg4mnZmTkbO/QEMxdWCO3W+gGdXxjEmIpSx93WyRizlXj3xypeoVRIfzLkPV6cbJ74K4HEr4lA2aeOsCFya9wYnfzuDky3I2d+BWV8tuM/2p7Jy+xHenT6UjkHe1921Z1bEkZZbzKx/9GRQt5YoYeBG8toniXy6L5Wt84cR2CpUZC/2ZU42I1+IA9l8U3DKq+WbXxxjx/4zbF9wP15u19d6cUfOs+TjBMp1RhHEF4zqTa87AoQX/b3s+jGNhRvjeXvaELp0DEby69MA4DJ3WW24mUPZ8PUpNsWd4qO5kQR4u15ntHLvFKeyKyGND2KTMFkszHmiFxG9br9u3PbvU1i5LZFNsyNo3yoQKWDQrQFOYWfBxnhef35gtWnZ4dPZTI7ZIwL7yn8NQHWFPWUDXv3oEN/9lMGWl4bh7+uLFDBQ1IhTFy4lMzvXDlXBTY7lGy8MomeHa7nlhYtlPB29i4FdWzDnyV6iwlZECeYHf86ie7C/uGvHz+Yz8+19hN8RwKqJA6xHs6TcwJOvfEmAjxtrJ/0NR1dfJL/eQse8FWs4lZJqD3CKQ9kNZp1Y6Nf8Up5a/BVTHuvOQ32vJbpK/Jqz7gcSUnLYNCuCQJ/KLCT1wiVGL/1aVOauWjWlFUbxfYkS5DtdC/KxR86zcEM8854K5z7luLq3RvLsKKr6iXMWiaP8dvR8NI712mZQQsEBMBQJoyr0JsHQ7c08iB53l/VYKf8l/pLLpJjdDO4eJNhTmNIbzcQmnCc5vQDFYfh5uTLm3hCG9mhlnZtXVM7kNXvE2PUz7sHLXVvJmtabwqJiRkycwZB+4bw4cewNvWxNH6ttM8hFSVB6zqoj6v2DHEzKYnvU/aJsuSpKUvzWzuN8+G0yD/drx+RHu6JRV7p9pfRREm7lrk0bXpl9KHKpVMeUtXvFiVj93AA6t/YVbQmp2RDx/6GjJ5i6cBmLZ05iYJ+eNeG44f/V91BMZcjZe60TxRHaGM/KCf3pHdLsOoVKDqmkWl8eOkf7Fl4sGtOXFn7uohq4WKITbCqZieJA4hLPs2bHMQpKKgTTw8JbV+pyCUTy7ip+LnvrPeL2xYv75ufT1A7glDSqIBHKs4XyghIdIxd/JeoxxSlUDcpmi4WPvzvNuq9OYjBa6NbeTzDipFELkEVlevafvEBmfikt/d3594gwwn7nnK4eyYysHMbNjCK8a2eipkxApaq+33Iz5DV3vwxFlWnYFdl1OI1FHx5i1uM9eaDPjXv/StB+/bOjHErKolxvQm8wC+/opFHh7qzhySF38GCftlxxrFdYa4bk3U3Et1lLVnPydCqbVr8qOmF1lZrBIUNxCnLJGbGGkgMq5c2lMh3vv3gPXm437ycqjkJx9QpYpa3golWLyuBqjLMa7aBG8r9btAH3xCfw0vIYRj4yjAkjR9QVl5hnAzhlmIycnwC6PDFJ6YtMfXOvcPuvPTdAsFFncXAUjCmdsOTUczz30qu0bx3E8rkzcHetLI3qKjaCU/BZEIWrvlCs9W1iOlEbDgrX/uLjPcWRq7UofUyvzqKPmZtfwMR5r4hW+vrlLxPg51NrdVUn2A5OmWkxIRceg4oczBaZbXtTWLPjqPCcSuxTWgk2i6RC8u0pYlr6hSwmRy2lQqfjjYWzCW7TymY11Q2sHTihSRaxTy5Nw2KqsHpH5YjOGNGDLm39btCFrGKCsx+SRwdMDq58EbubtZu2iOet+VMm0L1Tx3oBVos7d4P1LAbk4hTBYvxJJf4dFK5+eP/2omhVSpzrvKHSPlc7i9TK7OhNZk4e85bHcOZ8Bm2DWrBq/kx8vev3YbIOzFUBajGA6TKFeem8sz2Wz/eeENlL39BAxj8cjq9vAJKzP2i8kFVafk45J154ks+cFYqmPzuaoXf3ES899S3/O7gqFp1I/oXPY3ezO/5H8XJzZ8dgwrqEUHa5gn2HE8nIyuY2Xx/uHdCXRyMG4+tdt+zDlo2od3BXF9Xp9Gz45Avi9h2kqLgUR0e1ADL27w/Tv3eYtTSyxci6jrEbuKsGKaVL4aVi8TKqPBNXbTHU1XBb5tkdnC1G2GtMIzh77ay99TYyZ+8dtpf+RubstbP21tvInL132F76G5mz187aW+9fmrnfAKHyzYl04NvHAAAAAElFTkSuQmCC" />

                <h1>Bank</h1>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.sectionprovide}>
      <div className={styles.provider}>
      <img alt="salam" src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg.webp" width={302} height={402}/>
      <img src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp" alt="sekilli" width={302} height={402}/>
      <div className={styles.providetext}>
      <div className={styles.providertext}>
      <h1>We Provide Highly Reliable & Effective Legal Solutions</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
      <span>Book an appointment</span>
      </div>
      
      </div>
      </div>
      </section>

<section className={styles.customers}>
<div className={styles.customersdiv}>
<div className={styles.customer}>
<h1>Happy Customers</h1>
<div className={styles.customerwwrap}>
{
    costumers.map((costumer,id)=>{
        return(
<div className={styles.customerwrap}>
<Costumer key={id} costumer={costumer}/>
</div>
        )
    })
}
</div>
</div>
</div>



</section>

      <section className={styles.sectionsolution}>
      <div className={styles.solution}>
      <img src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp" alt="sekilli" width={302} height={402}/>
      <div className={styles.solutiontext}>
      <div className={styles.solutionstext}>
      <h1>We Provide Highly Reliable & Effective Legal Solutions</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
      <span>Book an appointment</span>
      </div>
      
      </div>
      <div className={styles.solutiontext}>
      <div className={styles.solutionstext}>
      <h1>We Provide Highly Reliable & Effective Legal Solutions</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
      <span>Book an appointment</span>
      </div>
      
      </div>
      </div>
      </section>
    </>
  );
};

export default Index;
